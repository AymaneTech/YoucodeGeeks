<?php

namespace App\Services\Implementations;

use App\Http\Resources\CampusResource;
use App\Repositories\Contracts\CampusRepositoryInterface;
use App\Services\Contracts\CampusServiceInterface;

class CampusService implements CampusServiceInterface
{
    public function __construct(public CampusRepositoryInterface $repository){}

    public function all()
    {
        return CampusResource::collection($this->repository->all());
    }

}
