<?php

namespace App\DTO\Requests;

use App\Http\Requests\StoreUserRequest;

readonly class UserDTO
{
    public function __construct(
        public string $firstName,
        public string $lastName,
        public string $email,
        public string $password,
        public string $role,
        public bool $isVerified,
    ){}

    public static function fromRequest(StoreUserRequest $request)
    {
        $validatedData = $request->validated();
        return new self(
            firstName: $validatedData['firstName'],
            lastName: $validatedData['lastName'],
            email: $validatedData['email'],
            password: $validatedData['password'],
            role: $validatedData['role'],
            isVerified: true
        );
    }
}
