<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Actions\VerifyNewUserAction;
use App\Http\Controllers\BaseApiController;
use App\Http\Resources\StudentResource;
use App\Http\Resources\UserResource;
use App\Models\Student;
use App\Models\User;
use Exception;
use Illuminate\Support\Facades\Gate;

class ManageUsersController extends BaseApiController
{
    public function __construct(public VerifyNewUserAction $action)
    {
        abort_if(Gate::denies(
            ability: "manage-dashboard"),
            $this->sendError(error: "You don't have access to be here (should be admin)", code: 403,),
        );
    }

    public function verify(User $user)
    {
        try {
            $user = $this->action->handle($user);
            $user->load("role");
            return $this->sendResponse(message: "user verified successfully", result: new UserResource($user));
        } catch (Exception $e) {
            return $this->sendError(error: "could not get the token", errorMessages: $e->getMessage());
        }
    }
}
