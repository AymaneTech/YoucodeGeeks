<?php

namespace App\DTO\Requests;

use App\Http\Requests\UpdateProfileRequest;

readonly class UpdateProfileDTO
{
    public function __construct(
        public string $firstName,
        public string $lastName,
        public string $email,
        public string $bio,
        public object $image
    )
    {
    }

    public static function fromRequest(UpdateProfileRequest $request)
    {
        $validatedData = $request->validated();
        extract($validatedData);
        return new self(
            firstName: $firstName,
            lastName: $lastName,
            email: $email,
            bio: $bio,
            image: $image
        );
    }

}
