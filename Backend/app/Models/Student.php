<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\HasMany;

class Student extends User
{
    protected $fillable = [
        "first_name",
        "last_name",
        "email",
        "password",
        "class_room_id",
        "role_id",
        "is_verified"
    ];

    public function classRoom()
    {
        return $this->belongsTo(ClassRoom::class, "class_room_id");
    }

    public function questions(): HasMany
    {
        return $this->hasMany(Question::class, "author_id");
    }
    public function answers(): HasMany
    {
        return $this->hasMany(Answer::class, "author_id");
    }

    public function blogs()
    {
        return $this->hasMany(Blog::class, "author_id");
    }

    public function comments()
    {
        return $this->hasMany(Comment::class, "author_id");
    }

}
