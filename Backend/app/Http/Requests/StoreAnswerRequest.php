<?php

namespace App\Http\Requests;

use App\DTO\Requests\AnswerDTO;
use App\Models\Answer;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Gate;

class StoreAnswerRequest extends FormRequest
{
    public function authorize(): bool
    {
        return $this->user()->can("create", Answer::class);
    }

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
