<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LoginUserRequest extends BaseFormRequest
{
    public function rules(): array
    {
        return [
            "email" => "required | email | string",
            "password" => "required | min:3 | max:250",
        ];
    }
}
