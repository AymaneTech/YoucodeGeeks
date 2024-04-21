<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator as ValidatorInterface;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Arr;
use Illuminate\Validation\Validator;

abstract class BaseFormRequest extends FormRequest
{
    protected function failedValidation(Validator|ValidatorInterface $validator)
    {
        throw new HttpResponseException(response()->json([
            'errors' => $validator->errors(),
        ], 422));
    }
    protected function sendError(string $error, int $code): void
    {
        abort(response()->json([
            "success" => false,
            'message' => $error,
        ], $code));
    }
}
