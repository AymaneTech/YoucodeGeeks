<?php

namespace App\DTO;

use App\Http\Requests\StoreTagRequest;
use App\Http\Requests\UpdateTagRequest;

readonly class TagDTO
{
    public function __construct(
        public string $name,
    )
    {
    }

    public static function fromRequest(StoreTagRequest|UpdateTagRequest $request)
    {
        return new self(
            name: $request->validated(key: "name")
        );

    }

}
