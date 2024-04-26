<?php

namespace App\Repositories\Implementations;

use App\Models\Blog;


class BlogRepository extends BasePostRepository
{
    public function __construct(Blog $model)
    {
        parent::__construct($model);
    }

    public function filterByTag($param)
    {
        return Blog::whereHas("tag", function ($query) use ($param) {
            $query->where("name", $param);
        })->get();
    }
}
