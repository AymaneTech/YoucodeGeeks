<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ShowQuestionResource extends JsonResource
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
                "image" => (new ImageResource($this->category->image)),
            ],
            "images" => ImageResource::collection($this->images),
            "author" => new AuthorResource($this->author),
            "answers" => AnswerResource::collection($this->answers),
            "tags" => $this->tags,
            "created_at" => $this->created_at->diffForHumans()

        ];
    }
}
