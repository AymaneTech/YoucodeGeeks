<?php

namespace App\Services\Implementations;

use App\DTO\Requests\AnswerDTO;
use App\DTO\Requests\AnswerUpdateDTO;
use App\Http\Resources\AnswerResource;
use App\Models\Answer;
use App\Repositories\Contracts\AnswerRepositoryInterface;
use App\Services\Contracts\AnswerServiceInterface;

class AnswerService implements AnswerServiceInterface
{
    public function __construct(public AnswerRepositoryInterface $repository)
    {
    }

    public function create(AnswerDTO $DTO)
    {
        return new AnswerResource($this->repository->create($DTO));
    }

    public function update(AnswerUpdateDTO $DTO ,Answer $answer)
    {
        return $this->repository->update($answer, $DTO);
    }

    public function delete(Answer $answer)
    {
        return $this->repository->delete($answer);
    }
    public function findByQuestion($id){
        $answers = $this->repository->findByQuestion($id);
        return AnswerResource::collection($answers);
    }
}
