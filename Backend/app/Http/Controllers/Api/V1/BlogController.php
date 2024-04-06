<?php

namespace App\Http\Controllers\Api\V1;

use App\DTO\Requests\PostDTO;
use App\Http\Controllers\BaseApiController;
use App\Http\Requests\StoreQuestionRequest;
use App\Http\Resources\QuestionResource;
use App\Models\Blog;
use App\Repositories\Contracts\ImageRepositoryInterface;
use App\Repositories\Contracts\PostRepositoryInterface;
use App\Services\Contracts\PostServiceInterface;
use Illuminate\Http\JsonResponse;

class BlogController extends BaseApiController
{
    public function __construct(
        public PostServiceInterface  $service){}

    public function index(): JsonResponse
    {
        return $this->sendResponse(
            message: "question create successfully",
            result: QuestionResource::collection($this->service->all()),
        );
    }

    public function store(StoreQuestionRequest $request): JsonResponse
    {
        $blog = $this->service->create($request->createDTO());

        return $this->sendResponse(
            message: "blog create successfully",
            result: $blog,
            code: 201
        );
    }

    public function show(Blog $blog): JsonResponse
    {
        return $this->sendResponse(
            message: "",
            result: new QuestionResource($this->service->show($blog)),
        );
    }

    public function update(StoreQuestionRequest $request, Blog $blog): JsonResponse
    {
        $this->service->update(post: $blog, DTO: $request->createDTO());
        return $this->sendResponse(
            message: "question updated successfully",
        );
    }

    public function delete(Blog $blog): JsonResponse
    {
        return $this->sendResponse(
            message: "question deleted successfully",
            result: new QuestionResource($blog),
        );
    }

}
