<?php

namespace App\Repositories\Eloquent;

use App\Models\Answer;
use App\Repositories\Contracts\AnswerRepositoryInterface;
use TimWassenburg\RepositoryGenerator\Repository\BaseRepository;

/**
 * Class AnswerRepository.
 */
class AnswerRepository extends BaseRepository implements AnswerRepositoryInterface
{
    /**
     * UserRepository constructor.
     *
     * @param Answer $model
     */
    public function __construct(Answer $model)
    {
        parent::__construct($model);
    }
}
