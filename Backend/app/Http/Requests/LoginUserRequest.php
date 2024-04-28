<?php

namespace App\Http\Requests;

use App\Models\User;
use Nette\Schema\ValidationException;

class LoginUserRequest extends BaseFormRequest
{
    public function rules(): array
    {
        return [
            "email" => "required | email | string",
            "password" => "required | min:3 | max:250",
        ];
    }

    public function authenticate()
    {
        $user = User::where("email", $this->validated("email"))->first();
        if($user && ! $user->is_verified){
            throw new ValidationException("the user is verified by the administrator");
        }
    }
}
