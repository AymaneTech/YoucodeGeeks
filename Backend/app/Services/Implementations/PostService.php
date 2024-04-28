<?php

namespace App\Services\Implementations;

use App\DTO\Requests\PostDTO;
use App\Http\Resources\QuestionResource;
use App\Models\Post;
use App\Models\Tag;
use App\Repositories\Contracts\PostRepositoryInterface;
use App\Services\Contracts\ImageServiceInterface;
use App\Services\Contracts\PostServiceInterface;
use App\Services\Contracts\TagServiceInterface;

class PostService implements PostServiceInterface
{
    public function __construct(
        public PostRepositoryInterface $repository,
        public ImageServiceInterface   $imageService,
        public TagServiceInterface $tagService
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
        $this->tagService->syncTags($post, $DTO->tags);
//         $this->imageService->insert($post, $DTO->images);
        return new QuestionResource($post);
    }

    public function update(Post $post, PostDTO $DTO): bool
    {
        $this->repository->update($post, $DTO);
        $this->tagService->syncTags($post, $DTO->tags);
        return true;
    }

    public function delete(Post $post): bool
    {
        return $this->repository->delete($post);
    }

    public function findByTag($param)
    {
        $blogs = $this->repository->findByTag($param);
        return QuestionResource::collection($blogs);
    }
    public function searchBlogs (array $filters){
        $blogs = $this->repository->searchBlogs($filters);
        return QuestionResource::collection($blogs);
    }
}
