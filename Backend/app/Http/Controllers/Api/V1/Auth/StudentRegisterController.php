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
            $token = $this->action->handle($request->createDTO());
            return "here";
            return $this->respondWithToken($token);
        } catch (\Exception $e) {
            return $this->sendError(error: "could not create this user", errorMessages: [$e->getMessage()], code: 424);
        }
    }
}
