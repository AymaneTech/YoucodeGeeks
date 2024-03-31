<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator as ValidatorInterface;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Support\Facades\Gate;
use Illuminate\Validation\Validator;

class StoreCategoryRequest extends BaseFormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return Gate::allows(ability: 'manage-dashboard');
    }

    public function rules(): array
    {
        return [
            "name" => "required|min:3|max:30|unique:categories",
            "image" => "required|file"
        ];
    }
}
