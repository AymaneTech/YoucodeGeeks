<?php

namespace App\Http\Requests;

use App\DTO\Requests\AnswerUpdateDTO;
use Illuminate\Foundation\Http\FormRequest;

class UpdateAnswerRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
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
            "body" => "required",
        ];
    }
    public function createDTO()
    {
        return AnswerUpdateDTO::fromRequest($this);
    }
}
