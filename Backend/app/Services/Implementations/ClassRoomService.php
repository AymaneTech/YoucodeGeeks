<?php

namespace App\Services\Implementations;

use App\DTO\Requests\ClassRoomDTO;
use App\Http\Resources\ClassRoomResource;
use App\Models\ClassRoom;
use App\Repositories\Contracts\ClassRoomRepositoryInterface;
use App\Services\Contracts\ClassRoomServiceInterface;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class ClassRoomService implements ClassRoomServiceInterface
{
    public function __construct(public ClassRoomRepositoryInterface $repository)
    {}

    public function all(): AnonymousResourceCollection
    {
        return ClassRoomResource::collection($this->repository->all());
    }

    public function show(ClassRoom $classRoom): ClassRoomResource
    {
        return new ClassRoomResource($this->repository->show($classRoom));
    }

    public function create(ClassRoomDTO $DTO): ClassRoomResource
    {
        return new ClassRoomResource($this->repository->create($DTO));
    }

    public function update(ClassRoom $classRoom, ClassRoomDTO $DTO): bool
    {
        return $this->repository->update($classRoom, $DTO);
    }

    public function delete(ClassRoom $classRoom): bool
    {
        return $this->repository->delete($classRoom);
    }
}
