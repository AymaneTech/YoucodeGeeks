<?php

namespace App\Repositories\Implementations;

use App\DTO\Requests\CampusDTO;
use App\Models\Campus;
use App\Repositories\Contracts\CampusRepositoryInterface;
use Illuminate\Database\Eloquent\Collection;

class CampusRepository implements CampusRepositoryInterface
{

    public function all(): Collection
    {
        return Campus::all();
    }

    public function create(CampusDTO $DTO)
    {
        // TODO: Implement create() method.
    }
}
