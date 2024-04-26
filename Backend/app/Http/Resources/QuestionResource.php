<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class QuestionResource extends JsonResource
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
            "title" => $this->title,
            "slug" => $this->slug,
            "details" => $this->details,
            "body" => $this->body,
            "category" => [
                "id" => $this->category->id,
                "name" => $this->category->name,
                "slug" => $this->category->slug,
            ],
            "images" => ImageResource::collection($this->images),
            "author" => new AuthorResource($this->author),
            "tags" => $this->tags,
            "created_at" => $this->created_at->diffForHumans()

        ];
    }
}
