<?php

use App\Http\Controllers\Api\V1\Admin\CategoryController;
use App\Http\Controllers\Api\V1\Admin\ClassRoomController;
use App\Http\Controllers\Api\V1\Admin\ManageUsersController;
use App\Http\Controllers\Api\V1\Admin\TagController;
use App\Http\Controllers\Api\V1\Auth\AuthApiController;
use App\Http\Controllers\Api\V1\Auth\StudentRegisterController;
use App\Http\Controllers\Api\V1\BlogController;
use App\Http\Controllers\Api\V1\CommentController;
use App\Http\Controllers\Api\V1\Student\AnswerController;
use App\Http\Controllers\Api\V1\Student\QuestionController;
use App\Models\ClassRoom;
use Illuminate\Support\Facades\Route;

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
    "blogs" => BlogController::class,
    "questions" => QuestionController::class,
    "answers" => AnswerController::class,
    "comments" => CommentController::class
]);

Route::model('classroom', ClassRoom::class);
