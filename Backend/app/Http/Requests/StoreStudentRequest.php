<?php

namespace App\Http\Requests;

use App\DTO\Requests\StudentDTO;
use App\DTO\Requests\UserDTO;
use Illuminate\Foundation\Http\FormRequest;

class StoreStudentRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "firstName" => "required|string",
            "lastName" => "required|string",
            "email" => "required|email|unique:students",
            "password" => "required|confirmed",
            "className" => "required",
            "role" => "required"
        ];
    }
    public function createDTO()
    {
        return StudentDTO::fromRequest($this);
    }
}
