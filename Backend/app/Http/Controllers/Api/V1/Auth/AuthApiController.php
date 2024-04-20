<?php

namespace App\Http\Controllers\Api\V1\Auth;

use App\Http\Controllers\BaseApiController;
use App\Http\Requests\LoginUserRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthApiController extends BaseApiController
{
    public function login(LoginUserRequest $request)
    {
        $credentials = $request->validated();
        try {
            if (!$token = JWTAuth::attempt($credentials)) {
                return $this->sendError(error: "Invalid credentials", code: 401);
            }
        } catch (JWTException $e) {
            return $this->sendError(error: "Could not create token", code: 500,);
        }
        $user = new UserResource(
            User::where("email", $credentials["email"])->first()
        );
        return $this->respondWithToken($token, $user);
    }

    public function logout(): JsonResponse
    {
        JWTAuth::invalidate(JWTAuth::getToken());

        return $this->sendResponse(message: 'Successfully logged out');
    }

    public function refresh(): JsonResponse
    {
        return $this->respondWithToken(auth()->refresh());
    }
}
