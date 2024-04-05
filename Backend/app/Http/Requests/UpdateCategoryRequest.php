<?php

namespace App\Http\Requests;

use App\DTO\Requests\CategoryDTO;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Support\Facades\Gate;

class UpdateCategoryRequest extends BaseFormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return Gate::allows(ability: 'manage-dashboard');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array|string>
     */
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
