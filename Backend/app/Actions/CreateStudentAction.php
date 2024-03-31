<?php

namespace App\Actions;

use App\Enums\Role;
use App\Models\Student;
use Illuminate\Http\Exceptions\HttpResponseException;

class CreateStudentAction
{
    public function handle(array $credentials)
    {
        $student = Student::create([
            "first_name" => $credentials["firstName"],
            "last_name" => $credentials["lastName"],
            "email" => $credentials["email"],
            "class_name" => $credentials["className"],
            "password" => $credentials["password"],
            "role_id" => 1,
        ]);

        return auth()->login($student);
    }

}
