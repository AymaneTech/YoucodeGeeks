<?php

namespace App\Services\Implementations;

use App\DTO\Requests\CategoryDTO;
use App\Models\Category;
use App\Services\Contracts\CategoryServiceInterface;

class CategoryService implements CategoryServiceInterface
{
    public function __construct()
    {}

    public function all()
    {
        // TODO: Implement all() method.
    }

    public function show(Category $category)
    {
        // TODO: Implement show() method.
    }

    public function create(CategoryDTO $DTO)
    {
        // TODO: Implement create() method.
    }

    public function update(Category $category, CategoryDTO $DTO)
    {
        // TODO: Implement update() method.
    }

    public function delete(Category $category)
    {
        // TODO: Implement delete() method.
    }
}
