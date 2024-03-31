<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator as ValidatorInterface;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Validation\Validator;

abstract class BaseFormRequest extends FormRequest
{
    protected function failedValidation(Validator|ValidatorInterface $validator)
    {
        throw new HttpResponseException(response()->json([
            'errors' => $validator->errors(),
        ], 422));
    }
}
