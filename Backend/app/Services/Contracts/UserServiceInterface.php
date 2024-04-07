<?php

namespace App\Services\Contracts;

use App\DTO\Requests\UserDTO;
use App\Models\User;

interface UserServiceInterface
{
    public function all();

    public function show(User $user);

    public function create(UserDTO $DTO);

    public function update(User $user, UserDTO $DTO);

    public function delete(User $user);

}
