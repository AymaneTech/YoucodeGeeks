<?php

namespace App\Services\Implementations;

use App\DTO\Requests\CategoryDTO;
use App\Http\Resources\CategoryResource;
use App\Models\Category;
use App\Repositories\Contracts\CategoryRepositoryInterface;
use App\Services\Contracts\CategoryServiceInterface;
use App\Services\Contracts\ImageServiceInterface;

class CategoryService implements CategoryServiceInterface
{
    public function __construct(
        public CategoryRepositoryInterface $repository,
        public ImageServiceInterface $imageService
    ){}

    public function all()
    {
        return CategoryResource::collection($this->repository->all());
    }

    public function show(Category $category): CategoryResource
    {
        return new CategoryResource($this->repository->show($category));
    }

    public function create(CategoryDTO $DTO): CategoryResource
    {
        $category = $this->repository->create(DTO: $DTO);
        $this->imageService->create($category, $DTO->image);

        return new CategoryResource($category);
    }

    public function update(Category $category, CategoryDTO $DTO)
    {
        $this->repository->update(category: $category, DTO: $DTO);
        $this->imageService->update($category, $DTO->image);

    }

    public function delete(Category $category): bool
    {
        return $this->repository->delete($category);
    }
}
