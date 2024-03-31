<?php

namespace App\Enums;

use PharIo\Manifest\Author;

enum Role: string
{
    case STUDENT = "student";
    case COACH = "coach";
    case ADMIN = "admin";

    public static function fromName(string $value)
    {
        foreach (self::cases() as $role){
            if($role->value === $value){
                return $role->value;
            }
        }
    }
}
