<?php

namespace App\Services\Implementations;

use App\DTO\Requests\CommentDTO;
use App\DTO\Requests\CommentUpdateDTO;
use App\Http\Resources\CommentResource;
use App\Models\Comment;
use App\Repositories\Contracts\CommentRepositoryInterface;
use App\Services\Contracts\CommentServiceInterface;

class CommentService implements CommentServiceInterface
{
    public function __construct(public CommentRepositoryInterface $repository)
    {
    }

    public function create(CommentDTO $DTO)
    {
        return new CommentResource($this->repository->create($DTO));
    }

    public function update(CommentUpdateDTO $DTO, Comment $comment)
    {
        return $this->repository->update($comment, $DTO);
    }

    public function delete(Comment $comment)
    {
        return $this->repository->delete($comment);
    }
}
