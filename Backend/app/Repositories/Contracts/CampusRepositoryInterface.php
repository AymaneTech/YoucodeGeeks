<?php

namespace App\Repositories\Contracts;

use App\DTO\Requests\CampusDTO;
use App\Models\Campus;
use Illuminate\Database\Eloquent\Collection;

interface CampusRepositoryInterface
{
    public function all(): Collection;

    public function create(CampusDTO $DTO);


}
