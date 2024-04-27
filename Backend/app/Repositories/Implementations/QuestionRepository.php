<?php

namespace App\Repositories\Implementations;

use App\Models\Question;

/**
 * Class QuestionRepository.
 */
class QuestionRepository extends BasePostRepository
{
    public function __construct(Question $postModel)
    {
        parent::__construct($postModel);
    }

    public function searchBlogs($param)
    {
        return Question::search($param)->get();
    }

}
