<?php

namespace App\Http\Resources;

use App\Enums\IsVerified;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class StudentResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "id" => $this->id,
            "firstName" => $this->first_name,
            "lastName" => $this->last_name,
            "email" => $this->email,
            "classRoom" => new ClassRoomResource($this->classRoom),
            "role" => new RoleResource($this->role),
            "isVerified" => $this->is_verified
        ];
    }
}
