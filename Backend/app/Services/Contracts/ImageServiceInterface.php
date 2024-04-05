<?php

namespace App\Services\Contracts;

use Illuminate\Database\Eloquent\Model;

interface ImageServiceInterface
{
    public function create(Model $model, object $image);
    public function insert();

    public function update(Model $model, object $image);
}
