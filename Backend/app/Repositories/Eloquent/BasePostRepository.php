<?php

namespace App\Repositories\Eloquent;

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
        return $this->postModel->all();

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
        return $post->load("images", "category", "author");
    }

    public function delete(Post $post): bool
    {
        return $post->delete();
    }
}
