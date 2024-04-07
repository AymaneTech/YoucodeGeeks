<?php

namespace App\Repositories\Implementations;

use App\Models\Blog;
use App\Repositories\Contracts\PostRepositoryInterface;


class BlogRepository extends BasePostRepository implements PostRepositoryInterface
{
    public function __construct(Blog $model)
    {
        parent::__construct($model);
    }
}
