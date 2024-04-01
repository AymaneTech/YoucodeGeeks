<?php

namespace App\DTO\Requests;

use App\Http\Requests\StoreQuestionRequest;
use Tymon\JWTAuth\Facades\JWTAuth;

readonly class QuestionDTO
{
    public function __construct(
        public string $title,
        public string $details,
        public string $body,
        public int $category_id,
        public int $author_id,
    )
    {}

    public static function fromRequest(StoreQuestionRequest $request)
    {
        $validatedData = $request->validated();
        return new self(
            title: $validatedData["title"],
            details: $validatedData["details"],
            body: $validatedData["body"],
            category_id: $validatedData["category_id"],
            author_id: JWTAuth::user()->id,
        );
    }

}
