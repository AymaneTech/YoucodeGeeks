<?php

namespace App\Models;

class Blog extends Post
{
    public function tags()
    {
        return $this->belongsToMany(Tag::class);
    }
}
