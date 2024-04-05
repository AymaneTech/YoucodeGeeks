<?php

namespace App\DTO\Requests;

use App\Http\Requests\StoreClassRequest;

readonly class ClassRoomDTO
{
    public function __construct(
        public string $name,
        public int    $campusId,
        public string $schoolYear,
    )
    {
    }

    public static function fromRequest(StoreClassRequest $request): ClassRoomDTO
    {
        $validatedData = $request->validated();
        return new self(
            name: $validatedData["name"],
            campusId: $validatedData["campusId"],
            schoolYear: $validatedData["schoolYear"]
        );

    }


}
