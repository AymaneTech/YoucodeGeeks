<?php

namespace App\DTO\Requests;

use App\Http\Requests\StoreBlogRequest;
use App\Http\Requests\StoreQuestionRequest;
use App\Http\Requests\UpdateQuestionRequest;
use Tymon\JWTAuth\Facades\JWTAuth;

readonly class PostDTO
{
    public function __construct(
        public string $title,
        public string $details,
        public string $body,
        public int $category_id,
        public array $images,
        public int $author_id,
        public array $tags,
    )
    {}
    public static function fromRequest(StoreQuestionRequest|UpdateQuestionRequest|StoreBlogRequest $request): PostDTO
    {
        $validatedData = $request->validated();
        return new self(
            title: $validatedData["title"],
            details: $validatedData["details"],
            body: $validatedData["body"],
            category_id: $validatedData["categoryId"],
            images: $validatedData["images"],
            author_id: JWTAuth::user()->id,
            tags: $validatedData["tags"],
        );
    }

}
