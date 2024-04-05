<?php

namespace App\Services\Implementations;

use App\DTO\Requests\CategoryDTO;
use App\Http\Resources\CategoryResource;
use App\Models\Category;
use App\Repositories\Contracts\CategoryRepositoryInterface;
use App\Services\Contracts\CategoryServiceInterface;
use Illuminate\Support\Collection;

class CategoryService implements CategoryServiceInterface
{
    public function __construct(public CategoryRepositoryInterface $repository)
    {}

    public function all()
    {
        return CategoryResource::collection(resource: $this->repository->all());
    }

    public function show(Category $category): CategoryResource
    {
        return new CategoryResource(resource: $this->repository->show(Category: $category));
    }

    public function create(CategoryDTO $DTO): CategoryResource
    {
        return new CategoryResource(resource: $this->repository->create(DTO: $DTO));
    }

    public function update(Category $category, CategoryDTO $DTO): bool
    {
        return $this->repository->update(category: $category, DTO: $DTO);
    }

    public function delete(Category $category): bool
    {
        return $this->repository->delete($category);
    }
}
