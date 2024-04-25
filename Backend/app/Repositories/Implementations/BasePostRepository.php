<?php

namespace App\Repositories\Implementations;

use App\DTO\Requests\PostDTO;
use App\Models\Post;
use App\Models\Question;
use App\Repositories\Contracts\PostRepositoryInterface;

abstract class BasePostRepository implements PostRepositoryInterface
{
    public function __construct(protected Post $postModel)
    {}

    public function all()
    {
        return $this->postModel::with("category", "category.image", "images", "author", "author.role", "author.image", "tags")->orderBy("created_at", "desc")->get();
    }

    public function create(PostDTO $DTO): Post
    {
        return $this->postModel::create([
            "title" => $DTO->title,
            "details" => $DTO->details,
            "body" => $DTO->body,
            "category_id" => $DTO->category_id,
            "author_id" => $DTO->author_id,
        ]);
    }

    public function update(Post $post, PostDTO $DTO): bool
    {
        return $post->update([
            "title" => $DTO->title,
            "details" => $DTO->details,
            "body" => $DTO->body,
            "category_id" => $DTO->category_id,
        ]);
    }

    public function show(Post $post): Post
    {
        return $post->load("images", "category", "author", "tags");
    }

    public function delete(Post $post): bool
    {
        return $post->delete();
    }
}
