<?php

namespace App\Http\Requests;

use App\DTO\Requests\ClassRoomDTO;
use App\DTO\Requests\PostDTO;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Gate;

class StoreClassRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return Gate::allows("manage-dashboard");
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "name" => "required",
            "schoolYear" => "required",
            "campusId"  =>  "required"
        ];
    }

    public function createDTO(): ClassRoomDTO
    {
        return ClassRoomDTO::fromRequest($this);
    }
}
