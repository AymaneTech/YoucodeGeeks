<?php

namespace App\Models;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Campus extends Model
{
    use HasFactory, Sluggable;
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
}
