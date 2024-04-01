<?php

namespace App\Repositories;

use App\DTO\Requests\QuestionDTO;
use App\Models\Question;

interface QuestionRepositoryInterface
{
    public function all();

    public function create(QuestionDTO $DTO): Question;

    public function update(Question $category, QuestionDTO $DTO): bool;

    public function show(Question $category): Question;

    public function delete(Question $category): bool;
}
