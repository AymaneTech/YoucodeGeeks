<?php

namespace App\Actions;

use Tymon\JWTAuth\Exceptions\TokenInvalidException;
use Tymon\JWTAuth\Facades\JWTAuth;
use Exception;

class VerifyNewUserAction
{
    /**
     * @throws TokenInvalidException
     * @throws Exception
     */
    public function handle($token)
    {
        try {
            $user = JWTAuth::setToken($token)->toUser();

            $user->is_verified = true;
            $user->save();
            return $user;
        } catch (TokenInvalidException $e) {
            throw new  TokenInvalidException();
        } catch (Exception $e) {
            throw new  Exception();
        }
    }
}
