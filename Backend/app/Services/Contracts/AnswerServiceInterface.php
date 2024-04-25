<?php

namespace App\Services\Contracts;

use App\DTO\Requests\AnswerDTO;
use App\DTO\Requests\AnswerUpdateDTO;
use App\Models\Answer;

interface AnswerServiceInterface
{
    public function create(AnswerDTO $DTO);

    public function update(AnswerUpdateDTO $DTO ,Answer $answer);

    public function delete(Answer $answer);
    public function findByQuestion($id);
}
