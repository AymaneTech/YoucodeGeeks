<?php

namespace App\Http\Controllers\Api\Admin;

use App\DTO\TagDTO;
use App\Http\Controllers\BaseApiController;
use App\Http\Requests\StoreTagRequest;
use App\Http\Requests\UpdateTagRequest;
use App\Http\Resources\TagResource;
use App\Models\Tag;
use App\Repositories\ImageRepositoryInterface;
use App\Repositories\TagRepositoryInterface;
use function Laravel\Prompts\table;

class TagController extends BaseApiController
{
    public function __construct(
        public TagRepositoryInterface   $repository,
    )
    {
    }

    public function index()
    {
        return TagResource::collection($this->repository->all());
    }

    public function store(StoreTagRequest $request)
    {
        $tag = $this->repository->create(TagDTO::fromRequest($request));

        return $this->sendResponse(
            message: "Tag created successfully",
            result: new TagResource($tag),
            code: 201
        );
    }

    public function update(UpdateTagRequest $request, Tag $tag)
    {
        $tag = $this->repository->update($tag, TagDTO::fromRequest($request));

        return $this->sendResponse(
            message: "Tag updated successfully",
            code: 201
        );
    }

    public function show(Tag $tag)
    {
        $tag = $this->repository->show($tag);
        return $this->sendResponse(
            message: "",
            result: new TagResource($tag),
            code: 201
        );
    }

    public function destroy(Tag $tag)
    {
        $this->repository->delete($tag);
        return $this->sendResponse(message: "category deleted", result: true);
    }
}
