<?php

namespace App\Http\Requests;

use App\DTO\Requests\CommentUpdateDTO;
use App\Models\Comment;
use Illuminate\Foundation\Http\FormRequest;

class UpdateCommentRequest extends FormRequest
{
    public function authorize(): bool
    {
        return $this->user()->can("update", Comment::class);
    }

    public function rules(): array
    {
        return [
            "body" => "required",
        ];
    }

    public function createDTO()
    {
        return CommentUpdateDTO::fromRequest($this);
    }
}
