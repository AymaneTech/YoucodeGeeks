<?php

namespace App\Actions;

use App\Models\Student;
use Tymon\JWTAuth\Exceptions\TokenInvalidException;
use Tymon\JWTAuth\Facades\JWTAuth;
use Exception;

class VerifyNewUserAction
{
    /**
     * @throws Exception
     */
    public function handle(Student $user): Student
    {
        try {
            $user->update(["is_verified" => true]);
            return $user;
        } catch (Exception $e) {
            throw new Exception("Error verifying user: " . $e->getMessage());        }
    }
}
