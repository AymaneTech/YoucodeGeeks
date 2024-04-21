<?php

namespace App\Repositories\Implementations;

use App\DTO\Requests\CategoryDTO;
use App\Models\Category;
use App\Repositories\Contracts\CategoryRepositoryInterface;
use Illuminate\Database\Eloquent\Collection;

class  CategoryRepository implements CategoryRepositoryInterface
{
    public function all(): Collection|array
    {
        return Category::with("image")
            ->withCount("blogs", "questions")
            ->get();
    }

    public function create(CategoryDTO $DTO): Category
    {
        return  Category::create([
            "name" => $DTO->name,
        ])->load("image")
            ->loadCount("blogs", "questions");
    }

    public function update(Category $category, CategoryDTO $DTO): Category
    {
        $category->update(["name" => $DTO->name]);
        return $category;
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
