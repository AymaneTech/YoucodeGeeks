<?php

namespace App\Http\Requests;

use App\DTO\Requests\StudentDTO;
use App\DTO\Requests\UserDTO;
use Illuminate\Foundation\Http\FormRequest;

class StoreStudentRequest extends BaseFormRequest
{
    public function rules(): array
    {
        return [
            "firstName" => "required|string",
            "lastName" => "required|string",
            "email" => "required|email|unique:students",
            "password" => "required|confirmed",
            "classRoomId" => "required",
            "image" => "required|image"
        ];
    }
    public function createDTO()
    {
        return StudentDTO::fromRequest($this);
    }
}
