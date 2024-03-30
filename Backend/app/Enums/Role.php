<?php

namespace App\Enums;

enum Role: string
{
    case STUDENT = "student";
    case COACH = "coach";
    case ADMIN = "admin";
}
