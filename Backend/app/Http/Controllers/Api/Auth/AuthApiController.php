<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\BaseApiController;
use App\Http\Requests\LoginUserRequest;
use App\Http\Requests\StoreUserRequest;
use Illuminate\Http\JsonResponse;

class AuthApiController extends BaseApiController
{
    public function login(LoginUserRequest $request)
    {
        $credentials = $request->validated();

        if (!$token = auth()->attempt($credentials)) {
            return $this->sendError(error: 'Unauthorized', code: 401);
        }

        return $this->respondWithToken(token: $token);
    }

    public function logout(): JsonResponse
    {
        auth()->logout();

        return $this->sendResponse(message: 'Successfully logged out');
    }

    public function refresh(): JsonResponse
    {
        return $this->respondWithToken(auth()->refresh());
    }
}
