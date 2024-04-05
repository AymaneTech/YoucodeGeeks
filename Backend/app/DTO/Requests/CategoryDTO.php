<?php

namespace App\DTO\Requests;

use App\Http\Requests\StoreCategoryRequest;
use App\Http\Requests\UpdateCategoryRequest;

readonly class CategoryDTO
{
    public function __construct(
        public string $name,
    ){}

    public static function fromRequest(StoreCategoryRequest|UpdateCategoryRequest $request)
    {
        return new self(
            name: $request->validated(key: "name")
        );

    }

}
