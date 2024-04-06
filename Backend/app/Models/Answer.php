<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Answer extends Model
{
    use HasFactory;
    protected $fillable = ["body", "question_id", "author_id"];

    public function author() { return $this->belongsTo(Student::class); }

    public function question(){ return $this->belongsTo(Question::class); }

}
