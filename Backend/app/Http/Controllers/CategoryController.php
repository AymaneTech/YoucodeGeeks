<?php

namespace App\Http\Controllers;

use App\DTO\CategoryDTO;
use App\Http\Requests\StoreCategoryRequest;
use App\Http\Requests\UpdateCategoryRequest;
use App\Http\Resources\CategoryResource;
use App\Models\Category;
use App\Repositories\CategoryRepositoryInterface;
use App\Repositories\ImageRepositoryInterface;
use Illuminate\Http\Request;

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

    public function show(Category $category)
    {
        $category = $this->repository->show($category);
        $this->sendResponse(
            message: "",
            result: new CategoryResource($category),
            code: 201
        );
    }

    public function destroy(Category $category)
    {
        $this->repository->delete($category);
        return $this->sendResponse(message: "category deleted", result: true, code: 200);
    }
}
