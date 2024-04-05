<?php

namespace App\Services\Contracts;

use App\DTO\Requests\ClassRoomDTO;
use App\Models\ClassRoom;

interface ClassRoomServiceInterface
{
    public function all();

    public function show(ClassRoom $classRoom);

    public function create(ClassRoomDTO $DTO);

    public function update(ClassRoom $classRoom, ClassRoomDTO $DTO);

    public function delete(ClassRoom $classRoom);

}
