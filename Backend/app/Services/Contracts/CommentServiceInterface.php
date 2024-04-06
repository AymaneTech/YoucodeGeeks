<?php

namespace App\Services\Contracts;


use App\DTO\Requests\CommentDTO;
use App\DTO\Requests\CommentUpdateDTO;
use App\Models\Comment;

interface CommentServiceInterface
{
    public function create(CommentDTO $DTO);

    public function update(CommentUpdateDTO $DTO, Comment $comment);

    public function delete(Comment $comment);
}
