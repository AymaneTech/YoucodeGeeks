<?php

namespace App\Http\Requests;

use App\DTO\Requests\PostDTO;
use App\Models\Blog;
use App\Models\Question;

class StoreBlogRequest extends BaseFormRequest
{
    public function authorize(): bool
    {
        return $this->user()->can("create", Blog::class);
    }

    public function rules(): array
    {
        return [
            "title" => "required | unique:blogs",
            "details" => "required",
            "body" => "required",
            "categoryId" => "required",
            "tags" => "required",
            "images" => "required | array"
        ];
    }

    public function createDTO(): PostDTO
    {
        return PostDTO::fromRequest($this);
    }
}
