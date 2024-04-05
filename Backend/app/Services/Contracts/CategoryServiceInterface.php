<?php

namespace App\Services\Contracts;

use App\DTO\Requests\CategoryDTO;
use App\Models\Category;

interface CategoryServiceInterface
{
    public function all();

    public function show(Category $category);

    public function create(CategoryDTO $DTO);

    public function update(Category $category, CategoryDTO $DTO);

    public function delete(Category $category);

}
