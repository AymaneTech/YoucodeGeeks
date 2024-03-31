<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Gate;

class StoreCategoryRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return Gate::allows(ability: 'manage-categories');
    }

    public function rules(): array
    {
        return [
            "name" => "required|min:3|max:30",
            "image" => "required|file"
        ];
    }
}
