<?php

use App\Http\Controllers\Api\V1\Admin\CategoryController;
use App\Http\Controllers\Api\V1\Admin\ClassRoomController;
use App\Http\Controllers\Api\V1\Admin\ManageUsersController;
use App\Http\Controllers\Api\V1\Admin\TagController;
use App\Http\Controllers\Api\V1\Auth\AuthApiController;
use App\Http\Controllers\Api\V1\Auth\StudentRegisterController;
use App\Http\Controllers\Api\V1\Student\QuestionController;
use App\Repositories\Contracts\ClassRoomRepositoryInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth');

Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'
], function ($router) {
    Route::post("register", [StudentRegisterController::class, "register"]);
    Route::get("verify/{user}", [ManageUsersController::class, "verify"]);
    Route::post('login', [AuthApiController::class, "login"]);
    Route::post('logout', [AuthApiController::class, "logout"]);
    Route::post('refresh', [AuthApiController::class, "refresh"]);
});

Route::apiResources([
    "categories" => CategoryController::class,
    "tags" => TagController::class,
    "classrooms" => ClassRoomController::class
]);
Route::apiResources([
    "questions" => QuestionController::class,
]);
