<?php

namespace App\Http\Requests;

use App\DTO\Requests\PostDTO;
use App\Models\Question;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Gate;

class UpdateQuestionRequest extends FormRequest
{
    public function authorize(): bool
    {
        return $this->user()->can("update", $this->route("question"));
    }

    public function rules(): array
    {
        return [
            "title" => "required | unique:questions,title," . $this->route('question')->id,
            'details' => 'sometimes | required',
            'body' => 'sometimes | required',
            'category_id' => 'sometimes | required',
            'tags' => 'sometimes | required',
            'images' => 'sometimes | required | array',
        ];
    }
    public function createDTO(): PostDTO
    {
        return PostDTO::fromRequest($this);
    }
}
