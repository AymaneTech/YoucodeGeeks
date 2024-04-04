<?php

namespace App\Http\Controllers;

use App\DTO\Requests\PostDTO;
use App\Http\Requests\StoreQuestionRequest;
use App\Http\Resources\QuestionResource;
use App\Models\Blog;
use App\Models\Question;
use App\Repositories\Contracts\ImageRepositoryInterface;
use App\Repositories\Contracts\PostRepositoryInterface;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class BlogController extends BaseApiController
{
    public function __construct(
        public PostRepositoryInterface  $repository,
        public ImageRepositoryInterface $imageRepository,
    )
    {
    }

    public function index(): JsonResponse
    {
        return $this->sendResponse(
            message: "question create successfully",
            result: QuestionResource::collection($this->repository->all()),
            code: 200
        );
    }

    public function store(StoreQuestionRequest $request): JsonResponse
    {
        $question = $this->repository->create((PostDTO::fromRequest($request)));
        $this->imageRepository->insert($question, $request->file("images"));

        return $this->sendResponse(
            message: "question create successfully",
            result: $question,
            code: 201
        );
    }

    public function show(Question $question): JsonResponse
    {
        return $this->sendResponse(
            message: "",
            result: new QuestionResource($this->repository->show($question)),
        );
    }

    public function update(StoreQuestionRequest $request, Question $question): JsonResponse
    {
        $question = $this->repository->update(post: $question, DTO: PostDTO::fromRequest($request));
        return $this->sendResponse(
            message: "question updated successfully",
            result: new QuestionResource($question),
        );
    }

    public function delete(Question $question): JsonResponse
    {
        return $this->sendResponse(
            message: "question deleted successfully",
            result: new QuestionResource($question),
        );
    }

}
