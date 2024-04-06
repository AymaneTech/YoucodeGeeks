<?php

namespace App\DTO\Requests;

use App\Http\Requests\UpdateAnswerRequest;

readonly class AnswerUpdateDTO
{
    public function __construct(
        public string $body
    )
    {}

    public static function fromRequest(UpdateAnswerRequest $request): self
    {
        return new self(
            $request->validated("body")
        );
    }
}
