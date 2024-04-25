<?php

namespace App\Http\Requests;

use App\DTO\Requests\PostDTO;
use App\Models\Question;

class StoreQuestionRequest extends BaseFormRequest
{
    public function authorize(): bool
    {
        return $this->user()->can("create", Question::class);
    }

    public function rules(): array
    {
        return [
            "title" => "required | unique:questions",
            "details" => "required",
            "body" => "required",
            "categoryId" => "required",
            "tags" => "required",
            "images" => "required",
        ];
    }

    public function createDTO(): PostDTO
    {
        return PostDTO::fromRequest($this);
    }
}
