<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Gate;

class UpdateQuestionRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return Gate::allows(ability: 'student-questions');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidwationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "title" => "required|unique:questions",
            "details" => "required",
            "body" => "required",
            "category_id" => "required",
            "tags" => "required",
            "images" => ""
        ];
    }
}
