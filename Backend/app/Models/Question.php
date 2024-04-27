<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Question extends Post
{
    public function ScopeSearch($query, array $filters)
    {
        $query->when($filters["search"] ?? false, fn($query, $search) => $query
            ->where("title", "ILIKE", "%" . $search . "%")
            ->orWhere("details", "ILIKE", "%" . $search . "%")
            ->orWhere("body", "ILIKE", "%" . $search . "%"));

        $query->when($filters["category"] ?? false, fn($query, $category) => $query
            ->whereHas('category', fn($query) => $query->where("name", $category)
            )
        );
        $query->with("images", "category", "category.image", "author", "tags");
    }

    public function author(): BelongsTo
    {
        return $this->belongsTo(Student::class, "author_id");
    }

    public function tags()
    {
        return $this->belongsToMany(Tag::class);
    }

    public function answers()
    {
        return $this->hasMany(Answer::class);
    }
}
