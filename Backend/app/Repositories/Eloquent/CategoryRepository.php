<?php

namespace App\Repositories\Eloquent;

use App\DTO\CategoryDTO;
use App\Models\Category;
use App\Repositories\CategoryRepositoryInterface;
use TimWassenburg\RepositoryGenerator\Repository\BaseRepository;

/**
 * Class CategoryRepository.
 */
class CategoryRepository  implements CategoryRepositoryInterface
{
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
