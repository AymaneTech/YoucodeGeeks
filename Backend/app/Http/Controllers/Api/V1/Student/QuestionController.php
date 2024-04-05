<?php

namespace App\Http\Controllers\Api\V1\Student;

use App\DTO\Requests\PostDTO;
use App\Http\Controllers\BaseApiController;
use App\Http\Requests\StoreQuestionRequest;
use App\Http\Requests\UpdateQuestionRequest;
use App\Http\Resources\QuestionResource;
use App\Models\Question;
use App\Repositories\Contracts\ImageRepositoryInterface;
use App\Repositories\Contracts\PostRepositoryInterface;
use Illuminate\Http\JsonResponse;

class QuestionController extends BaseApiController
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
            message: "question retrieved successfully",
            result: QuestionResource::collection($this->repository->all()),
        );
    }

    public function store(StoreQuestionRequest $request): JsonResponse
    {
        $question = $this->repository->create($request->createDTO());
        $this->imageRepository->insert($question, $request->file("images"));

        return $this->sendResponse(
            message: "question create successfully",
            result: new QuestionResource($question),
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

    public function update(UpdateQuestionRequest $request, Question $question): JsonResponse
    {
        $this->repository->update(post: $question, DTO: $request->createDTO());
        return $this->sendResponse(
            message: "question updated successfully",
        );
    }

    public function destroy(Question $question): JsonResponse
    {
        return $this->sendResponse(
            message: "question deleted successfully",
        );
    }

}
