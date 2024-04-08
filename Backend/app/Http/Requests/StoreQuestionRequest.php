<?php

namespace App\Http\Requests;

use App\DTO\Requests\PostDTO;
use App\Models\Question;
use Illuminate\Support\Facades\Gate;
use Tymon\JWTAuth\Facades\JWTAuth;

class StoreQuestionRequest extends BaseFormRequest
{
    public function authorize(): bool
    {
        return $this->user()->can("create", Question::class);
    }
    public function rules(): array
    {
        return [
            "title" => "required|unique:questions",
            "details" => "required",
            "body" => "required",
            "category_id" => "required",
            "tags" => "required",
            "images" => "required|array"
        ];
    }
    public function createDTO(): PostDTO
    {
        return PostDTO::fromRequest($this);
    }
}
