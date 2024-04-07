<?php

namespace App\DTO\Requests;

use App\Http\Requests\StoreStudentRequest;

readonly class StudentDTO
{
    public function __construct(
        public string $firstName,
        public string $lastName,
        public string $email,
        public string $password,
        public string $className,
        public string $role,
    ){}

    public static function fromRequest(StoreStudentRequest $request)
    {
        $validatedData = $request->validated();
        return new self(
            firstName: $validatedData['firstName'],
            lastName: $validatedData['lastName'],
            email: $validatedData['email'],
            password: $validatedData['password'],
            className: $validatedData["className"],
            role: $validatedData['role']
        );
    }
}
