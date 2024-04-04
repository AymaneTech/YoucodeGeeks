<?php

namespace App\Repositories\Contracts;

use App\DTO\Requests\PostDTO;
use App\DTO\Requests\QuestionDTO;
use App\Models\Post;

interface PostRepositoryInterface
{
    public function all();

    public function create(PostDTO $DTO): Post;

    public function update(Post $post, PostDTO $DTO): bool;

    public function show(Post $post): Post;

    public function delete(Post $post): bool;
}
