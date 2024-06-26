<?php

namespace App\Enums;

use PharIo\Manifest\Author;

enum Role: int
{
    case STUDENT = 1;
    case ADMIN = 2;
    case COACH = 3;

    public static function role($role)
    {
        return match ($role) {
            "admin" => 1,
            "student" => 2,
            "coach" => 3,
            "default" => false
        };
    }
    public static function roleName($role){
        return match($role) {
            1 => "Student",
            2 => "Admin",
            3 => " Coach"
        };
    }
}
