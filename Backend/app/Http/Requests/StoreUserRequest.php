<?php

namespace App\Http\Requests;

use App\DTO\Requests\UserDTO;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Support\Facades\Gate;
use Illuminate\Validation\Validator;
use \Illuminate\Contracts\Validation\Validator as ValidatorInterface;

class StoreUserRequest extends BaseFormRequest
{
    public function authorize(): bool
    {
        return Gate::allows(ability: "manage-dashboard");
    }
    public function rules(): array
    {
        return [
            "firstName" => "required|string",
            "lastName" => "required|string",
            "email" => "required|email|unique:users",
            "password" => "required|confirmed",
            "role" => "required",
            "image" => "required|image"
        ];
    }

    public function createDTO(): UserDTO
    {
        return UserDTO::fromRequest($this);
    }
}
