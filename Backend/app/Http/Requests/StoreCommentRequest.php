<?php

namespace App\Http\Requests;

use App\DTO\Requests\CommentDTO;
use App\Models\Comment;
use Illuminate\Foundation\Http\FormRequest;

class StoreCommentRequest extends FormRequest
{
    public function authorize(): bool
    {
        return $this->user()->can("create", Comment::class);
    }

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
