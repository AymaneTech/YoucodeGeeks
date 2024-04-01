<?php

namespace App\Repositories;

use App\DTO\Requests\CategoryDTO;
use App\Models\Category;

interface CategoryRepositoryInterface
{
    public function all();
    public function create(CategoryDTO $DTO): Category;
    public function update(Category $category, CategoryDTO $DTO): bool;
    public function show(Category $category): Category;
    public function delete(Category $category): bool;

}
