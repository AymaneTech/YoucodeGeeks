<?php

namespace App\Http\Requests;

use App\DTO\Requests\PostDTO;
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
            "title" => "required|unique:questions,title," . $this->route('question')->id,
            'details' => 'sometimes|required',
            'body' => 'sometimes|required',
            'category_id' => 'sometimes|required',
            'tags' => 'sometimes|required',
            'images' => 'sometimes|required|array',
        ];
    }
    public function createDTO(): PostDTO
    {
        return PostDTO::fromRequest($this);
    }
}
