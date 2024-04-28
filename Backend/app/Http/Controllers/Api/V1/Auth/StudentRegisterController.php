<?php

namespace App\Http\Controllers\Api\V1\Auth;

use App\Actions\CreateStudentAction;
use App\Http\Controllers\BaseApiController;
use App\Http\Requests\StoreStudentRequest;
use App\Http\Requests\StoreUserRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

class StudentRegisterController extends BaseApiController
{
    public function __construct(public CreateStudentAction $action)
    {
    }

    public function register(StoreStudentRequest $request)
    {
        try {
            $result = $this->action->handle($request->createDTO());
            return $this->sendResponse(
                message: "your account created successfully, wait until the admin accept your request",
                result: $result["student"]
            );
        } catch (\Exception $e) {
            return $this->sendError(error: "could not create this user", errorMessages: [$e->getMessage()], code: 424);
        }
    }
}
