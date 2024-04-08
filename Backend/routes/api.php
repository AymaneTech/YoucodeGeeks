<?php

use App\Http\Controllers\Api\V1\Admin\{CategoryController,
    ClassRoomController,
    ManageUsersController,
    TagController,
    UserController};
use App\Http\Controllers\Api\V1\Auth\{AuthApiController, StudentRegisterController};
use App\Http\Controllers\Api\V1\Student\{AnswerController, BlogController, CommentController, QuestionController};
use App\Http\Middleware\{IsAdmin, IsLoggedIn, IsStudent};
use App\Models\ClassRoom;
use Illuminate\Support\Facades\Route;

Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'
], static function ($router) {
    Route::post("register", [StudentRegisterController::class, "register"]);
    Route::get("verify/{user}", [ManageUsersController::class, "verify"]);
    Route::post('login', [AuthApiController::class, "login"]);
    Route::post('logout', [AuthApiController::class, "logout"]);
    Route::post('refresh', [AuthApiController::class, "refresh"]);
});

Route::group([
    "prefix" => "v1",
    "middleware" => [IsLoggedIn::class, IsAdmin::class]
], static function () {
    Route::apiResources([
        "users" => UserController::class,
        "classrooms" => ClassRoomController::class,
        "categories" => CategoryController::class,
        "tags" => TagController::class,
    ]);
})->name("dashboard");

Route::group([
    "prefix" => "v1",
    "middleware" => [IsLoggedIn::class, IsStudent::class]
], static function () {
    Route::apiResources([
        "blogs" => BlogController::class,
        "questions" => QuestionController::class,
        "answers" => AnswerController::class,
        "comments" => CommentController::class
    ]);
});

Route::model('classroom', ClassRoom::class);
