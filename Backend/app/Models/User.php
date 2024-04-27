<?php

namespace App\Models;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\MorphOne;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements JWTSubject
{
    use HasFactory, Notifiable, Sluggable;
    protected $fillable = [
        "first_name",
        "last_name",
        "email",
        "password",
        "role_id",
        "is_verified"
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims(): array
    {
        return [];
    }

    public function getFullnameAttribute(): string
    {
        return $this->first_name . ' ' . $this->last_name;
    }

    public function image(): MorphOne
    {
        return $this->morphOne(Image::class, "imageable");
    }
    public function role(): BelongsTo
    {
        return $this->belongsTo(Role::class);
    }
    public function sluggable(): array
    {
        return [
            "slug" => [
                "source" => "first_name", "last_name",
                'onUpdate' => true,
            ]
        ];
    }
}
