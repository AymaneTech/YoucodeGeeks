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
        $tags = is_array($param) ? $param : [$param];

        return Blog::whereHas("tags", function ($query) use ($tags) {
            $query->whereIn("name", $tags);
        })->with("category", "author", "images", "tags")->get();
    }
}
