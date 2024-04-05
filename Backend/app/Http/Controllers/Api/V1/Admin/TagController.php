<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\DTO\Requests\TagDTO;
use App\Http\Controllers\BaseApiController;
use App\Http\Requests\StoreTagRequest;
use App\Http\Requests\UpdateTagRequest;
use App\Http\Resources\TagResource;
use App\Models\Tag;
use App\Repositories\Contracts\TagRepositoryInterface;
use App\Services\Contracts\TagServiceInterface;

class TagController extends BaseApiController
{
    public function __construct(
        public TagServiceInterface   $service,
    )
    {
    }

    public function index()
    {
        return $this->service->all();
    }

    public function store(StoreTagRequest $request)
    {
        $tag = $this->service->create($request->createDTO());

        return $this->sendResponse(
            message: "Tag created successfully",
            result: $tag,
            code: 201
        );
    }

    public function update(UpdateTagRequest $request, Tag $tag)
    {
        $this->service->update($tag, $request->createDTO());

        return $this->sendResponse(
            message: "Tag updated successfully",
            code: 201
        );
    }

    public function show(Tag $tag)
    {
        $tag = $this->service->show($tag);
        return $this->sendResponse(
            message: "",
            result: $tag,
            code: 201
        );
    }

    public function destroy(Tag $tag)
    {
        $this->service->delete($tag);
        return $this->sendResponse(message: "category deleted", result: true);
    }
}
