<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\DTO\Requests\TagDTO;
use App\Http\Controllers\BaseApiController;
use App\Http\Requests\StoreTagRequest;
use App\Http\Requests\UpdateTagRequest;
use App\Http\Resources\TagResource;
use App\Models\Tag;
use App\Repositories\Contracts\TagRepositoryInterface;

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
        $tag = $this->repository->create($request->createDTO());

        return $this->sendResponse(
            message: "Tag created successfully",
            result: new TagResource($tag),
            code: 201
        );
    }

    public function update(UpdateTagRequest $request, Tag $tag)
    {
        $this->repository->update($tag, $request->createDTO());

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
