<?php

namespace App\Repositories\Contracts;

use App\DTO\Requests\AnswerDTO;
use App\DTO\Requests\AnswerUpdateDTO;
use App\Models\Answer;

interface AnswerRepositoryInterface
{
    public function create(AnswerDTO $DTO);

    public function update(Answer $answer, AnswerUpdateDTO $DTO);

    public function delete(Answer $answer);
    public function findByQuestion(string $id);
}
