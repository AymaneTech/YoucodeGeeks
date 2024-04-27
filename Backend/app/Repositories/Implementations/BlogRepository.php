<?php

namespace App\Repositories\Implementations;

use App\Models\Blog;


class BlogRepository extends BasePostRepository
{
    public function __construct(Blog $model)
    {
        parent::__construct($model);
    }

    public function findByTag($param)
    {
        return Blog::whereHas("tags", function ($query) use ($param) {
            $query->whereIn("name", [$param]);
        })->with("category", "author", "images", "tags")->get();
    }
}
