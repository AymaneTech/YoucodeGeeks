<?php

namespace App\Http\Requests;

use App\DTO\Requests\AnswerDTO;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Gate;

class StoreAnswerRequest extends FormRequest
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
            "question_id" => "required"
        ];
    }

    public function createDTO()
    {
        return AnswerDTO::fromRequest($this);
    }
}
