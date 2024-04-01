<?php

namespace App\Providers;

use App\Repositories\CategoryRepositoryInterface;
use App\Repositories\Eloquent\CategoryRepository;
use App\Repositories\Eloquent\QuestionRepository;
use App\Repositories\Eloquent\TagRepository;
use App\Repositories\QuestionRepositoryInterface;
use App\Repositories\TagRepositoryInterface;
use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
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
        app()->bind(CategoryRepositoryInterface::class, CategoryRepository::class);
        app()->bind(TagRepositoryInterface::class, TagRepository::class);
        app()->bind(QuestionRepositoryInterface::class, QuestionRepository::class);
    }
}
