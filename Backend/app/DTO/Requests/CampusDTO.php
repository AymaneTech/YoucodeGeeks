<?php

namespace App\DTO\Requests;

use App\Http\Requests\StoreCampusRequest;
use App\Http\Requests\UpdateCampusRequest;

readonly class CampusDTO
{

    public function __construct(
        public string $name,
        public int $campusId,
        public int $schoolYear
    )
    {}

    public static function fromRequest(StoreCampusRequest | UpdateCampusRequest $request): self
    {
        $validatedData = $request->validated();
        return new self (
            name: $validatedData['name'],
            campusId: $validatedData['campusId'],
            schoolYear: $validatedData['schoolYear']
        );
    }

}
