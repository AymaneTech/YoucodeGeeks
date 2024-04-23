<?php

namespace App\Actions;

use App\Models\Student;
use App\Models\User;
use Tymon\JWTAuth\Exceptions\TokenInvalidException;
use Tymon\JWTAuth\Facades\JWTAuth;
use Exception;

class VerifyNewUserAction
{
    /**
     * @throws Exception
     */
    public function handle(User $user): User
    {
        try {
            $user->update(["is_verified" => ! $user->is_verified]);
            return $user;
        } catch (Exception $e) {
            throw new Exception("Error verifying user: " . $e->getMessage());        }
    }
}
