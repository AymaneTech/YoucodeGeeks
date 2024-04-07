<?php

namespace App\Repositories\Implementations;

use App\DTO\Requests\UserDTO;
use App\Models\Admin;
use App\Models\Student;
use App\Models\User;
use App\Repositories\Contracts\UserRepositoryInterface;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Validation\UnauthorizedException;

/**
 * Class UserRepository.
 */
class UserRepository implements UserRepositoryInterface
{

    public function all()
    {
        return User::with("image", "role")->get();
    }

    public function create(UserDTO $DTO)
    {
        try {
            if ($DTO->role === "admin") {
                $user = Admin::create($this->getArr($DTO));
            } elseif ($DTO->role === "student") {
                $user = Student::create($this->getArr($DTO));
            } else {
                throw new \InvalidArgumentException("Invalid user role: {$DTO->role}");
            }
            return $user;
        } catch (\Exception $e) {
            throw new \RuntimeException("Error creating user: " . $e->getMessage(), $e->getCode(), $e);
        }
    }

    public function show(User $user)
    {
        try {
            return $user->load("image", "role");
        } catch (ModelNotFoundException $e) {
            throw new \RuntimeException("User not found: " . $e->getMessage(), $e->getCode(), $e);
        }
    }

    public function update(User $user, UserDTO $DTO)
    {
        try {
            return $user->update($this->getArr($DTO));
        } catch (ModelNotFoundException $e) {
            throw new \RuntimeException("User not found: " . $e->getMessage(), $e->getCode(), $e);
        } catch (UnauthorizedException $e) {
            throw new \RuntimeException("Validation error: " . $e->getMessage(), $e->getCode(), $e);
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

    private function getArr(UserDTO $DTO): array
    {
        return [
            "first_name" => $DTO->firstName,
            "last_name" => $DTO->lastName,
            "email" => $DTO->email,
            "password" => $DTO->password,
            "role_id" => $DTO->role,
            "is_verified" => $DTO->isVerified
        ];
    }
}
