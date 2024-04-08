<?php

namespace App\Http\Requests;

use App\DTO\Requests\CategoryDTO;
use Illuminate\Support\Facades\Gate;

class StoreCategoryRequest extends BaseFormRequest
{
    public function authorize(): bool
    {
        return Gate::allows(ability: 'manage-dashboard');
    }

    public function rules(): array
    {
        return [
            "name" => "required | min:3 | max:30 | unique:categories",
            "image" => "required | file"
        ];
    }

    public function createDTO(): CategoryDTO
    {
        return CategoryDTO::fromRequest($this);
    }
}
