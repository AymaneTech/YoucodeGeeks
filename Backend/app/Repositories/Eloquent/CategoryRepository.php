<?php

namespace App\Repositories\Eloquent;

use App\DTO\Requests\CategoryDTO;
use App\Models\Category;
use App\Repositories\CategoryRepositoryInterface;
use Illuminate\Database\Eloquent\Collection;

class  CategoryRepository implements CategoryRepositoryInterface
{
    public function all(): Collection|array
    {
        return Category::with("image")->get();
    }

    public function create(CategoryDTO $DTO): Category
    {
        return Category::create([
            "name" => $DTO->name,
        ]);
    }

    public function update(Category $category, CategoryDTO $DTO): bool
    {
        return $category->update(["name" => $DTO->name]);
    }

    public function delete(Category $category): bool
    {
        return $category->delete();
    }

    public function show(Category $category): Category
    {
        return $category->load("image");
    }
}
