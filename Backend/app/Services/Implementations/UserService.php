<?php

namespace App\Services\Implementations;

use App\DTO\Requests\StudentDTO;
use App\DTO\Requests\UserDTO;
use App\Enums\Role;
use App\Http\Resources\CoachResource;
use App\Http\Resources\StudentProfileResource;
use App\Http\Resources\StudentResource;
use App\Http\Resources\UserResource;
use App\Models\User;
use App\Repositories\Contracts\UserRepositoryInterface;
use App\Services\Contracts\ImageServiceInterface;
use App\Services\Contracts\UserServiceInterface;

class UserService implements UserServiceInterface
{
    public function __construct(
        public UserRepositoryInterface $repository,
        public ImageServiceInterface   $imageService
    )
    {
    }

    public function all()
    {
        $users = $this->repository->all();
        return [
            "students" => StudentResource::collection($users["students"]),
            "coaches" => CoachResource::collection($users["coaches"]),
            "admins" => UserResource::collection($users["admins"])
        ];
    }

    public function show(User $user)
    {
        return new UserResource($this->repository->show($user));
    }

    public function create(UserDTO|StudentDTO $DTO)
    {
        $user = $this->repository->create($DTO);
        $this->imageService->create($user, $DTO->image);
        return $this->getResource($user);
    }

    public function update(User $user, UserDTO $DTO)
    {
        return $this->repository->update($user, $DTO);
    }

    public function delete(User $user)
    {
        return $this->repository->delete($user);
    }

    public function profile(User $user)
    {
        $user = $this->repository->profile($user);
        return $this->getProfileResource($user);

    }

    private function getResource($user)
    {
        return $user->role_id === Role::STUDENT->value
            ? new StudentResource($user)
            : new UserResource($user);
    }

    public function getProfileResource($user)
    {
        return $user->role->id === Role::STUDENT->value
            ? new StudentProfileResource($user)
            : new UserResource($user);
    }
}
