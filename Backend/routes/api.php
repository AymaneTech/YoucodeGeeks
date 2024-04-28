<?php

use App\Http\Controllers\Api\V1\Admin\{CampusController,
    CategoryController,
    ClassRoomController,
    ManageUsersController,
    StatisticsController,
    TagController,
    UserController};
use App\Http\Controllers\Api\V1\Auth\{AuthApiController, ProfileController, StudentRegisterController};
use App\Http\Controllers\Api\V1\Student\{AnswerController, BlogController, CommentController, QuestionController};
use App\Http\Middleware\{IsAdmin, IsGuest, IsLoggedIn, IsStudent};
use App\Models\ClassRoom;
use Illuminate\Support\Facades\Route;

Route::group([
    'middleware' => IsGuest::class,
    'prefix' => 'v1'
], static function ($router) {
    Route::post("register", [StudentRegisterController::class, "register"]);
    Route::post('login', [AuthApiController::class, "login"]);
    Route::post('logout', [AuthApiController::class, "logout"]);
    Route::post('refresh', [AuthApiController::class, "refresh"]);
});


// dashboard routes
Route::group([
    "prefix" => "v1",
    "middleware" => [IsLoggedIn::class, IsAdmin::class]
], static function () {
    Route::apiResources([
        "users" => UserController::class,
        "classrooms" => ClassRoomController::class,
        "categories" => CategoryController::class,
        "tags" => TagController::class,
        "campuses" => CampusController::class,
    ], [
        "except" => "index"
    ]);
    Route::get("statistics/", [StatisticsController::class, "statistics"]);
    Route::get("users/verify/{user}", [ManageUsersController::class, "verify"]);
})->name("dashboard");

// Student Space Routes
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
    Route::get("profile/{user}", [ProfileController::class, "edit"]);
    Route::post("profile/{user}", [ProfileController::class, "update"]);
    Route::get("users", [UserController::class, "index"]);
    Route::get("categories", [CategoryController::class, "index"]);
    Route::get("classRooms", [ClassRoomController::class, "index"]);
    Route::get("tags", [TagController::class, "index"]);
    Route::get("campuses", [CampusController::class, "index"]);

    Route::get("questions/answers/{id}", [AnswerController::class, "findByQuestion"]);
    Route::get("blogs/filter/{param}", [BlogController::class, "findByTag"]);
    Route::post("questions/search", [QuestionController::class, "search"]);
});

Route::model('classroom', ClassRoom::class);


// helpers endpoint
Route::get("v1/helpers/classrooms", [ClassRoomController::class, "index"]);
Route::get("v1/helpers/categories", [CategoryController::class, "index"]);


