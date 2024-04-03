<?php

namespace App\Enums;

enum IsVerified: string
{
    case VERIFIED = "Verified";
    case UNVERIFIED = "Unverified";

    public static function fromBool(bool $isVerified): string
    {
        return $isVerified ? self::VERIFIED->value : self::UNVERIFIED->value;

    }

}
