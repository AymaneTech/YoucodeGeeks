<?php

namespace App\Repositories\Implementations;

use App\DTO\Requests\StudentDTO;
use App\DTO\Requests\UpdateProfileDTO;
use App\DTO\Requests\UserDTO;
use App\Enums\Role;
use App\Models\Admin;
use App\Models\Coach;
use App\Models\Image;
use App\Models\Student;
use App\Models\User;
use App\Repositories\Contracts\UserRepositoryInterface;
use App\Services\Contracts\ImageServiceInterface;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Validation\UnauthorizedException;

/**
 * Class UserRepository.
 */
class UserRepository implements UserRepositoryInterface
{
    public function __construct(public ImageServiceInterface $service)
    {}

    public function all()
    {
        return [
            "students" => Student::with("image", "role", "classRoom", "classRoom.campus")->get(),
            "coaches" => Coach::all(),
            "admins" => Admin::all()
        ];
    }

    public function create(UserDTO|StudentDTO $DTO)
    {
        try {
            if ($DTO->role === Role::ADMIN->value) {
                $user = Admin::create($this->getArr($DTO));
            } elseif ($DTO->role === Role::STUDENT->value) {
                $user = Student::create($this->getArr($DTO));
            } elseif ($DTO->role === Role::COACH->value) {
                $user = Coach::create($this->getArr($DTO));
            } else {
                throw new \InvalidArgumentException("Invalid user role: {$DTO->role}");
            }
            $this->service->create($user, $DTO->image);
            return $user;
        } catch (\Exception $e) {
            throw new \RuntimeException("Error creating user (user repository): " . $e->getMessage());
        }
    }

    public function show(User $user)
    {
        try {
            return $user;
        } catch (ModelNotFoundException $e) {
            throw new \RuntimeException("User not found: " . $e->getMessage(), $e->getCode());
        }
    }

    public function update(User $user, UserDTO $DTO)
    {
        try {
            return $user->update($this->getArr($DTO));
        } catch (ModelNotFoundException $e) {
            throw new \RuntimeException("User not found: " . $e->getMessage(), $e->getCode());
        } catch (UnauthorizedException $e) {
            throw new \RuntimeException("Validation error: " . $e->getMessage(), $e->getCode());
        }
    }

    public function delete(User $user)
    {
        try {
            return $user->delete();
        } catch (ModelNotFoundException $e) {
            throw new \RuntimeException("User not found: " . $e->getMessage(), $e->getCode(), $e);
        }
    }

    public function profile(User $user)
    {
        if (!$user->role === Role::STUDENT->value) {
            return $user;
        }
        return Student::where("email", $user->email)->with("questions", "answers", "comments", "classRoom", "classRoom.campus")->first();
    }

    public function updateProfile(User $user, UpdateProfileDTO $DTO)
    {
        $user->update([
            "first_name" => $DTO->firstName,
            "last_name" => $DTO->lastName,
            "email" => $DTO->email,
            "bio" => $DTO->bio
        ]);
        return Student::where("email", $user->email)->with("questions", "answers", "comments", "classRoom", "classRoom.campus")->first();
    }

    private function getArr(UserDTO|StudentDTO $DTO): array
    {
        $array = [
            "first_name" => $DTO->firstName,
            "last_name" => $DTO->lastName,
            "email" => $DTO->email,
            "password" => $DTO->password,
            "role_id" => $DTO->role,
            "is_verified" => $DTO->isVerified
        ];
        if (property_exists($DTO, "classRoomId")) {
            $array["class_room_id"] = $DTO->classRoomId;
        }
        return $array;
    }
}
