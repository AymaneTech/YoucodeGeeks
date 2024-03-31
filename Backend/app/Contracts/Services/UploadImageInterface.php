<?php

namespace App\Contracts\Services;

interface UploadImageInterface
{
    public function upload($image): string;
}
