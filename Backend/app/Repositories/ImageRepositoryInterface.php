<?php

namespace App\Repositories;

use Illuminate\Database\Eloquent\Model;

interface ImageRepositoryInterface
{
    public function create(Model $model, $image);

    public function insert(Model $model,  $images);
}
