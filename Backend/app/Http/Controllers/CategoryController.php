<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCategoryRequest;
use App\Http\Requests\UpdateCategoryRequest;
use App\Models\Category;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;
use Illuminate\Support\Str;

class CategoryController extends Controller
{
    public function index()
    {

    }

    public function store(StoreCategoryRequest $request)
    {
        $validatedData = $request->validated();
        Category::create(["name" => $validatedData["name"]]);
        $publicId = now() . Str::random(20);
        $upload = Cloudinary::upload($request->file("image")->getRealPath(), [
            "public_id" => $publicId,
            "folder" => "Youcode-geeks"
        ])->getSecurePath();
    }

    public function show(Category $category)
    {
        //
    }

    public function update(UpdateCategoryRequest $request, Category $category)
    {
        //
    }

    public function destroy(Category $category)
    {
        //
    }
}
