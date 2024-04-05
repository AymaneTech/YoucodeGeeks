<?php

namespace App\Exceptions;

use Illuminate\Database\Eloquent\ModelNotFoundException as BaseModelNotFoundException;
use Symfony\Component\HttpFoundation\Response;

class ModelNotFoundException extends BaseModelNotFoundException
{
    public function render($request)
    {
        return response()->json([
            'error' => 'Resource not found',
        ], Response::HTTP_NOT_FOUND);
    }
}
