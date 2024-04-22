<?php

namespace App\Providers;
use Illuminate\Support\ServiceProvider;
use App\Services\Contracts\{AnswerServiceInterface,
    CampusServiceInterface,
    CategoryServiceInterface,
    ClassRoomServiceInterface,
    CommentServiceInterface,
    ImageServiceInterface,
    PostServiceInterface,
    TagServiceInterface,
    UploadImageInterface,
    UserServiceInterface};
use App\Services\Implementations\{AnswerService,
    CategoryService,
    ClassRoomService,
    CommentService,
    ImageService,
    PostService,
    TagService,
    UploadToCloudinaryService,
    UserService,};

class ServiceServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        app()->bind(UploadImageInterface::class, UploadToCloudinaryService::class);
        app()->bind(CategoryServiceInterface::class, CategoryService::class);
        app()->bind(PostServiceInterface::class, PostService::class);
        app()->bind(TagServiceInterface::class, TagService::class);
        app()->bind(ImageServiceInterface::class, ImageService::class);
        app()->bind(ClassRoomServiceInterface::class, ClassRoomService::class);
        app()->bind(AnswerServiceInterface::class, AnswerService::class);
        app()->bind(CommentServiceInterface::class, CommentService::class);
        app()->bind(UserServiceInterface::class, UserService::class);
        app()->bind(CampusServiceInterface::class, CampusServiceInterface::class);
    }
}
