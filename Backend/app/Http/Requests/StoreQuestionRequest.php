<?php

namespace App\Http\Requests;

use Illuminate\Support\Facades\Gate;

class StoreQuestionRequest extends BaseFormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        if (Gate::denies("student-questions")) {
            $this->sendError(
                error: "You don't have access to perform this action (should be a student)",
                code: 401
            );
        }
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "title" => "required|unique:questions",
            "details" => "required",
            "body" => "required",
            "category_id" => "required",
            "tags" => "required",
            "images" => "required|array"
        ];
    }
}
