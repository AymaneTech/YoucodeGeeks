<?php

namespace App\Http\Controllers\Api\V1\Auth;

use App\Http\Controllers\BaseApiController;
use App\Http\Requests\UpdateProfileRequest;
use App\Models\User;
use App\Services\Contracts\UserServiceInterface;
use Mockery\Exception;

class ProfileController extends BaseApiController
{
    public function __construct(public UserServiceInterface $service)
    {
    }

    public function edit(User $user)
    {
        try {
            $user = $this->service->profile($user);
            return $this->sendResponse(
                message: 'profile information retrieved successfully',
                result: $user
            );
        } catch (Exception $e) {

            return $this->sendError(
                error: $e->getMessage()
            );
        }
    }

    public function update(UpdateProfileRequest $request, User $user)
    {
        try {
            $user = $this->service->updateProfile($user, $request->createDTO());
            return $this->sendResponse(
                message: 'profile information retrieved successfully',
                result: $user
            );
        }catch (\Exception $e){
            return $this->sendError(error: $e->getMessage());
        }

    }

}
