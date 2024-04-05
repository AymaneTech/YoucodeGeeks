<?php

namespace App\DTO\Requests;

use App\Http\Requests\StoreCategoryRequest;
use App\Http\Requests\UpdateCategoryRequest;

readonly class CategoryDTO
{
    public function __construct(
        public string $name,
        public object $image
    ){}

    public static function fromRequest(StoreCategoryRequest|UpdateCategoryRequest $request)
    {
        $validatedData = $request->validated();
        return new self(
            name: $validatedData["name"],
            image: $validatedData["image"]
        );

    }

}
