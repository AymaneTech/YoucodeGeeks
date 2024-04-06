<?php

namespace App\Repositories\Contracts;


use App\DTO\Requests\CommentDTO;
use App\DTO\Requests\CommentUpdateDTO;
use App\Models\Comment;

interface CommentRepositoryInterface
{
    public function create(CommentDTO $DTO);

    public function update(Comment $comment, CommentUpdateDTO $DTO);

    public function delete(Comment $comment);
}
