<?php

namespace App\Http\Controllers\Api\Auth;

use App\Actions\CreateStudentAction;
use App\Http\Controllers\BaseApiController;
use App\Http\Requests\StoreStudentRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

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
