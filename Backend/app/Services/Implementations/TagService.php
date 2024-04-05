<?php

namespace App\Services\Implementations;

use App\DTO\Requests\TagDTO;
use App\Http\Resources\TagResource;
use App\Models\Tag;
use App\Repositories\Contracts\TagRepositoryInterface;
use App\Services\Contracts\TagServiceInterface;

class TagService implements TagServiceInterface
{
    public function __construct(public TagRepositoryInterface $repository)
    {
    }
    public function all()
    {
        return TagResource::collection(resource: $this->repository->al());
    }

    public function show(Tag $tag): TagResource
    {
        return new TagResource($this->repository->show($tag));
    }

    public function create(TagDTO $DTO): TagResource
    {
        return new TagResource($this->repository->create($DTO));
    }

    public function update(Tag $tag, TagDTO $DTO): bool
    {
        return $this->repository->update($tag, $DTO);
    }

    public function delete(Tag $tag): bool
    {
        return $this->repository->delete($tag);
    }
}
