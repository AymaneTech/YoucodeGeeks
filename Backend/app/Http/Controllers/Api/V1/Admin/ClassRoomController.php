<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\BaseApiController;
use App\Http\Requests\StoreClassRequest;
use App\Http\Resources\ClassRoomResource;
use App\Models\ClassRoom;
use App\Repositories\Contracts\ClassRoomRepositoryInterface;

class ClassRoomController extends BaseApiController
{
    public function __construct(public ClassRoomRepositoryInterface $repository)
    {
    }

    public function index()
    {
        return $this->sendResponse(
            message: "class rooms list",
            result: ClassRoomResource::collection($this->repository->all())
        );
    }

    public function show(ClassRoom $classRoom)
    {
        return $this->sendResponse(
            message: "class room",
            result: new ClassRoomResource($this->repository->show($classRoom))
        );
    }

    public function store(StoreClassRequest $request)
    {
        $class = $this->repository->create($request->createDTO());
        return $this->sendResponse(
            message: "class room created successfully",
            result: new ClassRoomResource($class),
            code: 201
        );

    }

    public function update()
    {

    }

    public function destroy()
    {

    }


}
