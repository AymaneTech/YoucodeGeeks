<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class BaseApiController extends Controller
{
    protected function sendResponse($message, $result = null, $code = 200): JsonResponse
    {
        $response = [
            'success' => true,
            'message' => $message,
        ];
        if(! is_null($result)){
            $response += ["data" => $result];
        }
        return response()->json($response, $code);
    }

    protected function sendError($error, $errorMessages = [], $code = 404): JsonResponse
    {
        $response = [
            'success' => false,
            'message' => $error,
        ];

        if(!empty($errorMessages)){
            $response['data'] = $errorMessages;
        }

        return response()->json($response, $code);
    }
    protected function respondWithToken($token): JsonResponse
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60
        ], );
    }
}
