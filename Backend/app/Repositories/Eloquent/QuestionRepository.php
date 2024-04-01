<?php

namespace App\Repositories\Eloquent;

use App\DTO\Requests\QuestionDTO;
use App\Models\Question;
use App\Repositories\QuestionRepositoryInterface;
use TimWassenburg\RepositoryGenerator\Repository\BaseRepository;

/**
 * Class QuestionRepository.
 */
class QuestionRepository implements QuestionRepositoryInterface
{
    public function all()
    {
        return Question::with("images", "tags", "category")->get();
    }

    public function create(QuestionDTO $DTO): Question
    {
        return Question::create([
            "title" => $DTO->title,
            "details" => $DTO->details,
            "body" => $DTO->body,
            "category_id" => $DTO->category_id,
            "author_id" => $DTO->author_id,
        ]);
    }

    public function update(Question $question, QuestionDTO $DTO): bool
    {
//        $question->update([
//            "title" =>
//        ]);
    }

    public function show(Question $question): Question
    {
        return $question->load("images", "category", "author");
    }

    public function delete(Question $question): bool
    {
        return $question->delete();
    }
}
