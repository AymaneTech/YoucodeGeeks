<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\DTO\Requests\CategoryDTO;
use App\Http\Controllers\BaseApiController;
use App\Http\Requests\StoreCategoryRequest;
use App\Http\Requests\UpdateCategoryRequest;
use App\Http\Resources\CategoryResource;
use App\Models\Category;
use App\Repositories\Contracts\CategoryRepositoryInterface;
use App\Repositories\Contracts\ImageRepositoryInterface;

class CategoryController extends BaseApiController
{
    public function __construct(
        public CategoryRepositoryInterface $repository,
        public ImageRepositoryInterface    $imageRepository,
    )
    {
    }

    public function index()
    {
        return CategoryResource::collection($this->repository->all());
    }

    public function store(StoreCategoryRequest $request)
    {
        $category = $this->repository->create($request->createDTO());
        $this->imageRepository->create(model: $category, image: $request->validated("image"));

        return $this->sendResponse(
            message: "Category created successfully",
            result: new CategoryResource($category),
            code: 201
        );
    }

    public function update(UpdateCategoryRequest $request, Category $category)
    {
        $this->repository->update($category, $request->createDTO());
        return $this->sendResponse(
            message: "Category updated successfully",
            result: new CategoryResource($category),
            code: 200
        );
    }

    public function show(Category $category)
    {
        $category = $this->repository->show($category);
        return $this->sendResponse(
            message: "",
            result: new CategoryResource($category),
            code: 201
        );
    }

    public function destroy(Category $category)
    {
        $this->repository->delete($category);
        return $this->sendResponse(message: "category deleted", result: true);
    }
}
