<?php

namespace App\Repositories\Eloquent;

use App\DTO\Requests\ClassRoomDTO;
use App\Models\Class;
use App\Models\ClassRoom;
use App\Repositories\Contracts\ClassRoomRepositoryInterface;
use TimWassenburg\RepositoryGenerator\Repository\BaseRepository;

/**
 * Class ClassRoomRepository.
 */
class ClassRoomRepository  implements ClassRoomRepositoryInterface
{
    public function all()
    {
        return ClassRoom::with("campus")->get();
    }

    public function create(ClassRoomDTO $DTO): ClassRoom
    {
        return ClassRoom::create([
            "name" => $DTO->name,
            "campus_id" => $DTO->campusId,
            "school_year" => $DTO->schoolYear,
        ]);
    }

    public function update(ClassRoom $classRoom, ClassRoomDTO $DTO): bool
    {
        return $classRoom->update([
            "name" => $DTO->name,
            "campus_id" => $DTO->campusId,
            "school_year" => $DTO->schoolYear,
        ]);
    }

    public function delete(ClassRoom $classRoom): bool
    {
        return $classRoom->delete();
    }

    public function show(ClassRoom $classRoom): ClassRoom
    {
        return $classRoom->load("campus");
    }

}
