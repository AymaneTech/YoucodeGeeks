<?php

namespace App\DTO;

use App\Http\Requests\StoreCategoryRequest;

readonly class CategoryDTO
{
    public function __construct(
        public string $name,
    ){}

    public static function fromRequest(StoreCategoryRequest $request)
    {
        return new self(
            name: $request->validated(key: "name")
        );

    }

}
