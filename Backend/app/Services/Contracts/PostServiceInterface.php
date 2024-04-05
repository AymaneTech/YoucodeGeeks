<?php

namespace App\Services\Contracts;

use App\DTO\Requests\PostDTO;
use App\Models\Post;
use App\Models\Question;

interface PostServiceInterface
{
    public function all();

    public function show(Post $post);

    public function create(PostDTO $DTO);

    public function update(Post $post, PostDTO $DTO);

    public function delete(Post $post);
}
