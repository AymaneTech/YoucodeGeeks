<?php

namespace App\Enums;

use PharIo\Manifest\Author;

enum Role: int
{
    case STUDENT = 1;
    case ADMIN = 2;
    case COACH = 3;
}
