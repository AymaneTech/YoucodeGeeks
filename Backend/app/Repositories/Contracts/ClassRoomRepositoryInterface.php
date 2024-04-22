<?php

namespace App\Repositories\Contracts;

use App\DTO\Requests\ClassRoomDTO;
use App\Models\ClassRoom;

interface ClassRoomRepositoryInterface
{
    public function all();

    public function create(ClassRoomDTO $DTO): ClassRoom;

    public function update(ClassRoom $classRoom, ClassRoomDTO $DTO): ClassRoom;

    public function show(ClassRoom $classRoom): ClassRoom;

    public function delete(ClassRoom $classRoom): bool;
}
