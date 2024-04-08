<?php

namespace App\Http\Controllers\Api\V1\Student;

use App\Http\Controllers\BaseApiController;
use App\Http\Requests\StoreQuestionRequest;
use App\Http\Requests\UpdateQuestionRequest;
use App\Http\Resources\QuestionResource;
use App\Models\Question;
use App\Services\Contracts\PostServiceInterface;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\JsonResponse;

class QuestionController extends BaseApiController
{
    use AuthorizesRequests;
    public function __construct(
        public PostServiceInterface $service,
    )
    {}

    public function index(): JsonResponse
    {
        $this->authorize("viewAny", Question::class);
        return $this->sendResponse(
            message: "question retrieved successfully",
            result: QuestionResource::collection($this->service->all()),
        );
    }

    public function store(StoreQuestionRequest $request): JsonResponse
    {
        $question = $this->service->create($request->createDTO());
        return $this->sendResponse(
            message: "question create successfully",
            result: $question,
            code: 201
        );
    }

    public function show(Question $question): JsonResponse
    {
        $this->authorize("view", Question::class);
        return $this->sendResponse(
            message: "",
            result: new QuestionResource($this->service->show($question)),
        );
    }

    public function update(UpdateQuestionRequest $request, Question $question): JsonResponse
    {
        $this->service->update(post: $question, DTO: $request->createDTO());
        return $this->sendResponse(
            message: "question updated successfully",
        );
    }

    public function destroy(Question $question): JsonResponse
    {
        $this->authorize("delete", $question);
        $this->service->delete($question);
        return $this->sendResponse(
            message: "question deleted successfully",
        );
    }

}
