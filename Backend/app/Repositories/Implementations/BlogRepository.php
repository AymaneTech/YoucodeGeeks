<?php

namespace App\Repositories\Implementations;

use App\Models\Blog;
use App\Models\Post;


class BlogRepository extends BasePostRepository
{
    public function __construct(Blog $model)
    {
        parent::__construct($model);
    }

    public function relatedBlogs(Post $post)
    {
        return Blog::where("author_id", $post->author_id)
            ->whereNotIn("id", [$post->id])
            ->with("author", "images")
            ->get();
    }

    public function findByTag($param)
    {
        return Blog::whereHas("tags", function ($query) use ($param) {
            $query->whereIn("name", [$param]);
        })->with("category", "author", "images", "tags")->get();
    }
}
