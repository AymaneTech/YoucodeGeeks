<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
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
            "slug" => $this->slug,
            "email" => $this->email,
            "role" => new RoleResource($this->role),
            "image" => new ImageResource($this->image),
            "isVerified" => $this->is_verified
        ];
    }
}
