<?php

namespace App\Models;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Question extends Model
{
    use HasFactory, Sluggable;

    protected $fillable = [
        "title", "details", "body", "category_id", "author_id"
    ];
    public function getRouteKeyName()
    {
        return "slug";
    }
    public function sluggable(): array
    {
        return [
            "slug" => [
                "source" => "title",
                'onUpdate' => true,
            ]
        ];
    }

    public function author(): BelongsTo
    {
        return $this->belongsTo(User::class, "author_id");
    }

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    public function images()
    {
        return $this->morphMany(Image::class, "imageable");
    }
}
