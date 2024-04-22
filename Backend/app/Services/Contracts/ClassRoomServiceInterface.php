<?php

namespace App\Services\Contracts;

use App\DTO\Requests\ClassRoomDTO;
use App\Http\Resources\ClassRoomResource;
use App\Models\ClassRoom;

interface ClassRoomServiceInterface
{
    public function all();

    public function show(ClassRoom $classRoom);

    public function create(ClassRoomDTO $DTO);

    public function update(ClassRoom $classRoom, ClassRoomDTO $DTO): ClassRoomResource;

    public function delete(ClassRoom $classRoom);

}
