<?php

namespace App\Services\Implementations;

use App\DTO\Requests\UserDTO;
use App\Http\Resources\UserResource;
use App\Models\User;
use App\Repositories\Contracts\UserRepositoryInterface;
use App\Services\Contracts\UserServiceInterface;

class UserService implements UserServiceInterface
{
    public function __construct(
        public UserRepositoryInterface $repository
    ){}

    public function all()
    {
        return UserResource::collection($this->repository->all());
    }

    public function show(User $user)
    {
        return new UserResource($this->repository->show($user));
    }

    public function create(UserDTO $DTO)
    {
        return new UserResource($this->repository->create($DTO));
    }

    public function update(User $user, UserDTO $DTO)
    {
        return $this->repository->update($user, $DTO);
    }

    public function delete(User $user)
    {
        return $this->repository->delete($user);
    }
}
