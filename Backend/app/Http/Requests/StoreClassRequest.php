<?php

namespace App\Http\Requests;

use App\DTO\Requests\ClassRoomDTO;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Gate;

class StoreClassRequest extends FormRequest
{
    public function authorize(): bool
    {
        return Gate::allows("manage-dashboard");
    }

    public function rules(): array
    {
        return [
            "name" => "required|unique:class_rooms,name",
            "schoolYear" => "required",
            "campusId" => "required"
        ];
    }

    public function createDTO(): ClassRoomDTO
    {
        return ClassRoomDTO::fromRequest($this);
    }
}
