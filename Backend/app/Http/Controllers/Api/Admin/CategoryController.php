<?php

namespace App\Http\Controllers\Api\Admin;

use App\DTO\CategoryDTO;
use App\Http\Controllers\BaseApiController;
use App\Http\Requests\StoreCategoryRequest;
use App\Http\Requests\UpdateCategoryRequest;
use App\Http\Resources\CategoryResource;
use App\Models\Category;
use App\Repositories\CategoryRepositoryInterface;
use App\Repositories\ImageRepositoryInterface;

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
        $category = $this->repository->create(CategoryDTO::fromRequest($request));
        $this->imageRepository->create(model: $category, image: $request->validated("image"));

        return $this->sendResponse(
            message: "Category created successfully",
            result: new CategoryResource($category),
            code: 201
        );
    }

    public function update(UpdateCategoryRequest $request, Category $category)
    {
        dd($request);
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
