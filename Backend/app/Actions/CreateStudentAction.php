<?php

namespace App\Actions;

use App\DTO\Requests\StudentDTO;
use App\DTO\Requests\UserDTO;
use App\Models\Student;

class CreateStudentAction
{
    public function handle(StudentDTO $DTO)
    {
        $student = Student::create([
            "first_name" => $DTO->firstName,
            "last_name" => $DTO->lastName,
            "email" => $DTO->email,
            "class_name" => $DTO->className,
            "password" => $DTO->password,
            "role_id" => 1,
        ]);

        return auth()->login($student);
    }

}
