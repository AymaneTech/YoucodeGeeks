<?php

namespace App\Repositories\Implementations;

use App\DTO\Requests\AnswerDTO;
use App\DTO\Requests\AnswerUpdateDTO;
use App\Models\Answer;
use App\Repositories\Contracts\AnswerRepositoryInterface;

/**
 * Class AnswerRepository.
 */
class AnswerRepository implements AnswerRepositoryInterface
{
    public function create(AnswerDTO $DTO): Answer
    {
        return Answer::create([
            "body" => $DTO->body,
            "question_id" => $DTO->question_id,
            "author_id" => $DTO->author_id
        ]);
    }

    public function update(Answer $answer, AnswerUpdateDTO $DTO): bool
    {
        return $answer->update([
            "body" => $DTO->body,
        ]);
    }

    public function delete(Answer $answer): bool
    {
        return $answer->delete();
    }
    public function findByQuestion(string $id){
        return Answer::with("author")->where("question_id", $id)->orderBy("created_at", "desc")->get();
    }
}
