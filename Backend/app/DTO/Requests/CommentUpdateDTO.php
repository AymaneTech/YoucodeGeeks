<?php

namespace App\DTO\Requests;

use App\Http\Requests\UpdateCommentRequest;

readonly class CommentUpdateDTO
{
    public function __construct(public string $body)
    {}

    public function fromRequest(UpdateCommentRequest $request): self
    {
        return new self ($request->validated("body"));
    }
}
