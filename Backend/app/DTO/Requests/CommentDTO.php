<?php

namespace App\DTO\Requests;

use App\Http\Requests\StoreAnswerRequest;
use Tymon\JWTAuth\Facades\JWTAuth;

readonly class CommentDTO
{
    public function __construct(
        public string $body,
        public int    $blog_id,
        public int    $author_id
    )
    {
    }

    public static function fromRequest(StoreAnswerRequest $request)
    {
        $validatedData = $request->validated();
        return new self (
            body: $validatedData["body"],
            blog_id: $validatedData["blog_id"],
            author_id: JWTAuth::user()->id,
        );
    }

}
