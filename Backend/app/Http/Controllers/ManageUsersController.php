<?php

namespace App\Http\Controllers;

use App\Actions\VerifyNewUserAction;
use App\Http\Resources\StudentResource;
use Illuminate\Http\Request;
use Exception;

class ManageUsersController extends BaseApiController
{
    public function __construct(public VerifyNewUserAction $action)
    {
    }

    public function verify(Request $request)
    {
        try {
            $user = $this->action->handle($request->bearerToken());
            $user->load("role");
            return $this->sendResponse(message: "user verified successfully", result: new StudentResource($user));
        }catch (Exception $e){
            return $this->sendError(error: "could not get the token", errorMessages: $e->getMessage());
        }
    }
}
