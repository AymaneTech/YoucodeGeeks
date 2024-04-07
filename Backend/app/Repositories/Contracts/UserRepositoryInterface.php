<?php

namespace App\Repositories\Contracts;

use App\DTO\Requests\UserDTO;
use App\Models\User;

interface UserRepositoryInterface
{
    public function all();

    public function create(UserDTO $DTO);

    public function show(User $user);

    public function update(User $user, UserDTO $DTO);

    public function delete(User $user);
}
