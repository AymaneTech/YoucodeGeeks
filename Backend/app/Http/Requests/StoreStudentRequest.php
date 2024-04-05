<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Validation\Validator;
use \Illuminate\Contracts\Validation\Validator as ValidatorInterface;

class StoreStudentRequest extends BaseFormRequest
{
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
}
