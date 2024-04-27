<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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

}
