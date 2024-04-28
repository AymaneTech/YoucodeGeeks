<?php

namespace App\Http\Controllers\Api\V1\Auth;

use App\Http\Controllers\BaseApiController;
use App\Models\User;
use App\Services\Contracts\UserServiceInterface;
use Mockery\Exception;

class ProfileController extends BaseApiController
{
    public function __construct(public UserServiceInterface $service)
    {
    }

    public function show(User $user)
    {
        try {
            $user = $this->service->profile($user);
            return $this->sendResponse(
                message: 'profile information retrieved successfully',
                result: $user
            );
        } catch (Exception $e) {
            $this->sendError(
                error: $e->getMessage()
            );
        }
    }
}
