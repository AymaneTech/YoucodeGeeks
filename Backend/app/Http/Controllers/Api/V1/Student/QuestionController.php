<?php

namespace App\Http\Controllers\Api\V1\Student;

use App\DTO\Requests\QuestionDTO;
use App\Http\Controllers\BaseApiController;
use App\Http\Requests\StoreQuestionRequest;
use App\Http\Resources\QuestionResource;
use App\Models\Question;
use App\Repositories\ImageRepositoryInterface;
use App\Repositories\QuestionRepositoryInterface;

class QuestionController extends BaseApiController
{
    public function __construct(
        public QuestionRepositoryInterface $repository,
        public ImageRepositoryInterface    $imageRepository,
    )
    {
    }

    public function store(StoreQuestionRequest $request)
    {
        $question = $this->repository->create((QuestionDTO::fromRequest($request)));
        $this->imageRepository->insert($question, $request->file("images"));

        return $this->sendResponse(
            message: "question create successfully",
            result: $question,
            code: 201
        );
    }

    public function show(Question $question)
    {
        return $this->sendResponse(
            message: "",
            result: new QuestionResource($this->repository->show($question)),
        );
    }

    public function update()
    {

    }

}
