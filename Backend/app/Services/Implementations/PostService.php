<?php

namespace App\Services\Implementations;

use App\DTO\Requests\PostDTO;
use App\Http\Resources\QuestionResource;
use App\Models\Post;
use App\Repositories\Contracts\PostRepositoryInterface;
use App\Services\Contracts\ImageServiceInterface;
use App\Services\Contracts\PostServiceInterface;

class PostService implements PostServiceInterface
{
    public function __construct(
        public PostRepositoryInterface $repository,
        public ImageServiceInterface   $imageService,
    )
    {
    }

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
        $post = $this->repository->create($DTO);
//        $this->imageService->insert($post, $DTO->images);

        return new QuestionResource($post);
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
