<?php

namespace App\Http\Requests;

use App\DTO\Requests\CommentDTO;
use Illuminate\Foundation\Http\FormRequest;

class StoreCommentRequest extends FormRequest
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
            "blog_id" => "required",
        ];
    }

    public function createDTO()
    {
        return CommentDTO::fromRequest($this);
    }
}
