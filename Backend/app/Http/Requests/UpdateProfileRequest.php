<?php

namespace App\Http\Requests;

use App\DTO\Requests\UpdateProfileDTO;

class UpdateProfileRequest extends BaseFormRequest
{
    public function rules(): array
    {
        return [
            "firstName" => "required",
            "lastName" => "required",
            "email" => "required",
            "bio" => "required",
            "image" => "required",
        ];
    }

    public function createDTO()
    {
        return UpdateProfileDTO::fromRequest($this);
    }
}
