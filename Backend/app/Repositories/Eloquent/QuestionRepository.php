<?php

namespace App\Repositories\Eloquent;

use App\Models\Question;
use App\Repositories\Contracts\PostRepositoryInterface;

/**
 * Class QuestionRepository.
 */
class QuestionRepository extends BasePostRepository implements PostRepositoryInterface
{
    public function __construct(Question $postModel)
    {
        parent::__construct($postModel);
    }

}
