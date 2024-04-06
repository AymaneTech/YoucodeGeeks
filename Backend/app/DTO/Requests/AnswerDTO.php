<?php

namespace App\DTO\Requests;

use App\Http\Requests\StoreAnswerRequest;
use Tymon\JWTAuth\Facades\JWTAuth;

readonly class AnswerDTO
{
    public function __construct(
        public string $body,
        public int    $question_id,
        public int    $author_id
    )
    {
    }

    public static function fromRequest(StoreAnswerRequest $request)
    {
        $validatedData = $request->validated();
        return new self (
            body: $validatedData["body"],
            question_id: $validatedData["question_id"],
            author_id: JWTAuth::user()->id,
        );
    }
}
