<?php

namespace App\Repositories\Eloquent;

use App\DTO\Requests\CommentDTO;
use App\DTO\Requests\CommentUpdateDTO;
use App\Models\Comment;
use App\Repositories\Contracts\CommentRepositoryInterface;

/**
 * Class CommentRepository.
 */
class CommentRepository implements CommentRepositoryInterface
{
    public function create(CommentDTO $DTO): Comment
    {
        return Comment::create([
            "body" => $DTO->body,
            "blog_id" => $DTO->blog_id,
            "author_id" => $DTO->author_id,
        ]);
    }

    public function update(Comment $comment, CommentUpdateDTO $DTO): bool
    {
        return $comment->update([
            "body" => $DTO->body,
        ]);
    }

    public function delete(Comment $comment): bool
    {
        return $comment->delete();
    }
}
