<?php

namespace App\DTO\Requests;

use App\Http\Requests\StoreTagRequest;
use App\Http\Requests\UpdateTagRequest;

readonly class TagDTO
{
    public function __construct(
        public string $name,
    )
    {}

    public static function fromRequest(StoreTagRequest|UpdateTagRequest $request): TagDTO
    {
        return new self(
            name: $request->validated(key: "name")
        );

    }

}
