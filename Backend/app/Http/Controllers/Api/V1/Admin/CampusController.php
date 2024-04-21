<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\BaseApiController;
use App\Services\Contracts\CampusServiceInterface;

class CampusController extends BaseApiController
{
    public function __construct(public CampusServiceInterface $service)
    {
    }

    public function index()
    {
        try {
            return $this->sendResponse(
                message: "campus list",
                result: $this->service->all()
            );
        }catch (\Exception $e) {
            return $this->sendError(error: $e->getMessage());
        }
    }
}
