<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\BaseApiController;
use App\Http\Requests\StoreClassRequest;
use App\Models\ClassRoom;
use App\Services\Contracts\ClassRoomServiceInterface;

class ClassRoomController extends BaseApiController
{
    public function __construct(public ClassRoomServiceInterface $service)
    {
    }

    public function index()
    {
        return $this->sendResponse(
            message: "class rooms list",
            result: $this->service->all()
        );
    }

    public function show(ClassRoom $classRoom)
    {
        return $this->sendResponse(
            message: "class room",
            result: $this->service->show($classRoom)
        );
    }

    public function store(StoreClassRequest $request)
    {
        $class = $this->service->create($request->createDTO());
        return $this->sendResponse(
            message: "class room created successfully",
            result: $class,
            code: 201
        );

    }

    public function update(StoreClassRequest $request, ClassRoom $classRoom)
    {
        $this->service->update($classRoom, $request->createDTO());
        return $this->sendResponse(message: "Class room updated successfully", code: 204);
    }

    public function destroy(ClassRoom $classRoom)
    {
        $this->service->delete($classRoom);
        return $this->sendResponse(
            message: "class room deleted successfully",
            code: 204
        );

    }


}
