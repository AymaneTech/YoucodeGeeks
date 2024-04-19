<?php

namespace App\Policies;

use App\Enums\Role;
use App\Models\User;
use Illuminate\Database\Eloquent\Model;

abstract class BasePolicy
{

    public function create(User $user): bool
    {
        return $user->role_id === Role::STUDENT->value;
    }
    public function update(User $user, Model $model): bool
    {
        return $user->role_id === Role::STUDENT->value && $user->id === $model->author_id ;
    }

    public function delete(User $user, Model $model): bool
    {
        return $user->role_id === Role::STUDENT->value && $user->id === $model->author_id ;
    }

    public function restore(User $user, Model $model): bool
    {
        return $user->role_id === Role::STUDENT->value && $user->id === $model->author_id ;
    }

    public function forceDelete(User $user, Model $model): bool
    {
        return $user->role_id === Role::STUDENT->value && $user->id === $model->author_id ;
    }
}
