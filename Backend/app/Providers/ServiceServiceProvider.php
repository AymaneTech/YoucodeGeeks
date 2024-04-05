<?php

namespace App\Providers;

use App\Services\Contracts\CategoryServiceInterface;
use App\Services\Contracts\ClassRoomServiceInterface;
use App\Services\Contracts\ImageServiceInterface;
use App\Services\Contracts\PostServiceInterface;
use App\Services\Contracts\TagServiceInterface;
use App\Services\Contracts\UploadImageInterface;
use App\Services\Implementations\CategoryService;
use App\Services\Implementations\ClassRoomService;
use App\Services\Implementations\ImageService;
use App\Services\Implementations\PostService;
use App\Services\Implementations\TagService;
use App\Services\Implementations\UploadToCloudinaryService;
use Illuminate\Support\ServiceProvider;

class ServiceServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        //
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
    }
}
