<?php

namespace App\Models;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphOne;

class Category extends Model
{
    use HasFactory, Sluggable;

    protected $fillable = ["name"];

    public function image(): MorphOne
    {
        return $this->morphOne(Image::class, "imageable");
    }
    public function blogs (){
        return $this->hasMany(Blog::class);
    }
    public function questions(){
        return $this->hasMany(Question::class);
    }

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
