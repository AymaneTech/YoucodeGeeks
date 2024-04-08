<?php

namespace App\Http\Requests;

use App\DTO\Requests\TagDTO;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Gate;

class UpdateTagRequest extends FormRequest
{
    public function authorize(): bool
    {
        return Gate::allows(ability: 'manage-dashboard');
    }
    public function rules(): array
    {
        return [
            "name" => "required",
        ];
    }
    public function createDTO(): TagDTO
    {
        return TagDTO::fromRequest($this);
    }
}
