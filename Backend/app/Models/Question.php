<?php

namespace App\Models;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Question extends Post
{
    public function author(): BelongsTo
    {
        return $this->belongsTo(Student::class, "author_id");
    }
    public function tags()
    {
        return $this->belongsToMany(Tag::class);
    }
    public function answers(){
        return $this->hasMany(Answer::class);
    }
}
