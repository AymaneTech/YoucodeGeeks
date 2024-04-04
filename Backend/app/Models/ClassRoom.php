<?php

namespace App\Models;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ClassRoom extends Model
{
    use HasFactory, Sluggable;

    protected $fillable = ["name", "campus_id", "school_year"];

    public function getRouteKeyName()
    {
        return "slug";
    }

    public function sluggable(): array
    {
        return [
            "slug" => [
                "source" => "name",
                'onUpdate' => true,
            ]
        ];
    }
    public function resolveRouteBinding($value, $field = null)
    {
        return $this->where('slug', $value)->firstOrFail();
    }

    public function campus()
    {
        return $this->belongsTo(Campus::class, "campus_id");
    }

}
