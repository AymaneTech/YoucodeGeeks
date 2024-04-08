<?php

namespace App\Http\Requests;

use App\DTO\Requests\AnswerUpdateDTO;
use Illuminate\Foundation\Http\FormRequest;

class UpdateAnswerRequest extends FormRequest
{
    public function authorize(): bool
    {
        return $this->user()->can("update", $this->route("answer"));
    }

    public function rules(): array
    {
        return [
            "body" => "required",
        ];
    }
    public function createDTO()
    {
        return AnswerUpdateDTO::fromRequest($this);
    }
}
