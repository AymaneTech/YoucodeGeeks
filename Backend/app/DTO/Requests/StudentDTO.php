<?php

namespace App\DTO\Requests;

use App\Http\Requests\StoreStudentRequest;
use App\Http\Requests\StoreUserRequest;

readonly class StudentDTO
{
    public function __construct(
        public string $firstName,
        public string $lastName,
        public string $email,
        public string $password,
        public string $classRoomId,
        public int $role,
        public object $image,
        public bool $isVerified
    ){}

    public static function fromRequest(StoreStudentRequest | StoreUserRequest $request)
    {
        $validatedData = $request->validated();
        return new self(
            firstName: $validatedData['firstName'],
            lastName: $validatedData['lastName'],
            email: $validatedData['email'],
            password: $validatedData['password'],
            classRoomId: $validatedData["classRoomId"],
            role: 1,
            image: $validatedData['image'],
            isVerified: false,
        );
    }
}
