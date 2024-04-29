<?php

namespace App\Repositories\Implementations;

use App\Models\Post;
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

    public function relatedBlogs(Post $post)
    {
        // TODO: Implement relatedBlogs() method.
    }
}
