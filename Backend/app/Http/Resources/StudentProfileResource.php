<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class StudentProfileResource extends JsonResource
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
            "role" => new RoleResource($this->whenLoaded("role")),
            "questions" => QuestionResource::collection($this->whenLoaded("questions")),
            "blogs" => QuestionResource::collection($this->whenLoaded("blogs")),
            "answers" => AnswerResource::collection($this->whenLoaded("answers")),
            "comments" => CommentResource::collection($this->whenLoaded("comments")),
            "created_at" => $this->created_at->diffForHumans(),
            "updated_at" => $this->updated_at->diffForHumans(),
        ];
    }
}
