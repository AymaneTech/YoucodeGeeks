<?php

use App\Http\Controllers\Api\Auth\AuthApiController;
use App\Http\Controllers\Api\Auth\StudentRegisterController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth');

Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {
    Route::post("register", [StudentRegisterController::class, "register"]) ;
    Route::post("test", [StudentRegisterController::class, "test"]) ;
    Route::post('login', [AuthApiController::class, "login"]);
    Route::post('logout', [AuthApiController::class, "logout"]);
    Route::post('refresh', [AuthApiController::class, "refresh"]);

});
