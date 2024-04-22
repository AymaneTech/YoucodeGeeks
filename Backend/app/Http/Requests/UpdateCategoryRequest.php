<?php

namespace App\Http\Requests;

use App\DTO\Requests\CategoryDTO;
use Illuminate\Support\Facades\Gate;

class UpdateCategoryRequest extends BaseFormRequest
{
    public function authorize(): bool
    {
        return Gate::allows(ability: 'manage-dashboard');
    }

    public function rules(): array
    {
        return [
            "name" => "required",
            "image" => "required"
        ];
    }

    public function createDTO(): CategoryDTO
    {
        return CategoryDTO::fromRequest($this);
    }

}
