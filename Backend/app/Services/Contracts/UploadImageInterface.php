<?php

namespace App\Services\Contracts;

interface UploadImageInterface
{
    public function upload($image): string;
}
