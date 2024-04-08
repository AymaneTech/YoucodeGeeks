<?php

namespace App\Http\Controllers\Api\V1\Student;

use App\Http\Controllers\BaseApiController;
use App\Http\Requests\StoreAnswerRequest;
use App\Http\Requests\UpdateAnswerRequest;
use App\Models\Answer;
use App\Services\Contracts\AnswerServiceInterface;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class AnswerController extends BaseApiController
{
    use AuthorizesRequests;
    public function __construct(public AnswerServiceInterface $service)
    {
    }

    public function store(StoreAnswerRequest $request)
    {
        $answer = $this->service->create($request->createDTO());
        return $this->sendResponse(
            message: "answer created successfully",
            result: $answer,
            code: 201
        );
    }

    public function update(UpdateAnswerRequest $request, Answer $answer)
    {
        $this->service->update($request->createDTO(), $answer);
        return $this->sendResponse(
            message: "answer updated successfully",
            code: 204
        );
    }

    public function destroy(Answer $answer)
    {
        $this->authorize("delete", $answer);
        $this->service->delete($answer);
        return $this->sendResponse(
            message: "answer deleted successfully",
            code: 204
        );
    }
}
