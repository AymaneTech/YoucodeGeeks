<?php

namespace App\Http\Controllers\Api\V1\Auth;

use App\Actions\CreateStudentAction;
use App\Http\Controllers\BaseApiController;
use App\Http\Requests\StoreStudentRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Tymon\JWTAuth\Facades\JWTAuth;

class StudentRegisterController extends BaseApiController
{
    public function __construct(public CreateStudentAction $action)
    {
    }

    public function register(StoreStudentRequest $request)
    {
        try {
            $token = $this->action->handle($request->validated());
            return $this->respondWithToken($token);
        } catch (HttpResponseException $e) {
            return $this->sendError(error: "could not create this user", errorMessages: ["efdfd"], code: 424);
        }
    }
}
