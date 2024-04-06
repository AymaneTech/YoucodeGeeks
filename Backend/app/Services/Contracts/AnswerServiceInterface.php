<?php

namespace App\Services\Contracts;

use App\DTO\Requests\AnswerDTO;
use App\DTO\Requests\AnswerUpdateDTO;
use App\Models\Answer;

interface AnswerServiceInterface
{
    public function create(AnswerDTO $DTO);

    public function update(Answer $answer, AnswerUpdateDTO $DTO);

    public function delete(Answer $answer);
}
