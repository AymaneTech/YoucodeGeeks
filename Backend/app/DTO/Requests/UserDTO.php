<?php

namespace App\DTO\Requests;

use App\Enums\Role;
use App\Http\Requests\StoreUserRequest;
use function PHPUnit\Framework\exactly;

readonly class UserDTO
{
    public function __construct(
        public string $firstName,
        public string $lastName,
        public string $email,
        public string $password,
        public int $role,
        public object $image,
        public bool   $isVerified,
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
            image: $validatedData["image"],
            isVerified: true
        );
    }
}
