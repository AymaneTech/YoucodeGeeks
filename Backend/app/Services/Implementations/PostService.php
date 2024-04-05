<?php

namespace App\Services\Implementations;

use App\DTO\Requests\PostDTO;
use App\Http\Resources\QuestionResource;
use App\Models\Post;
use App\Models\Question;
use App\Repositories\Contracts\PostRepositoryInterface;
use App\Repositories\Eloquent\BasePostRepository;
use App\Services\Contracts\PostServiceInterface;
use PhpParser\Node\Scalar\Encapsed;
use Ramsey\Collection\Collection;

class PostService implements PostServiceInterface
{
    public function __construct(public PostRepositoryInterface $repository)
    {}

    public function all()
    {
        return QuestionResource::collection($this->repository->all());
    }

    public function show(Post $post): QuestionResource
    {
        return new QuestionResource($this->repository->show($post));
    }

    public function create(PostDTO $DTO): QuestionResource
    {
        return new QuestionResource($this->repository->create($DTO));
    }

    public function update(Post $post, PostDTO $DTO): bool
    {
        return $this->repository->update($post, $DTO);
    }

    public function delete(Post $post): bool
    {
        return $this->repository->delete($post);
    }
}