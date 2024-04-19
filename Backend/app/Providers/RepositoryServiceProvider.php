<?php

namespace App\Providers;

use App\Models\Blog;
use App\Models\Question;
use App\Repositories\Contracts\AnswerRepositoryInterface;
use App\Repositories\Contracts\CategoryRepositoryInterface;
use App\Repositories\Contracts\ClassRoomRepositoryInterface;
use App\Repositories\Contracts\CommentRepositoryInterface;
use App\Repositories\Contracts\ImageRepositoryInterface;
use App\Repositories\Contracts\PostRepositoryInterface;
use App\Repositories\Contracts\TagRepositoryInterface;
use App\Repositories\Contracts\UserRepositoryInterface;
use App\Repositories\Implementations\AnswerRepository;
use App\Repositories\Implementations\BlogRepository;
use App\Repositories\Implementations\CategoryRepository;
use App\Repositories\Implementations\ClassRoomRepository;
use App\Repositories\Implementations\CommentRepository;
use App\Repositories\Implementations\ImageRepository;
use App\Repositories\Implementations\QuestionRepository;
use App\Repositories\Implementations\TagRepository;
use App\Repositories\Implementations\UserRepository;
use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->app->bind(PostRepositoryInterface::class, function ($app) {
            if ($this->isQuestionContext()) {
                return new QuestionRepository($app->make(Question::class));
            }

            return new BlogRepository($app->make(Blog::class));
        });
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        app()->bind(CategoryRepositoryInterface::class, CategoryRepository::class);
        app()->bind(TagRepositoryInterface::class, TagRepository::class);
        app()->bind(ClassRoomRepositoryInterface::class, ClassRoomRepository::class);
        app()->bind(ImageRepositoryInterface::class, ImageRepository::class);
        app()->bind(AnswerRepositoryInterface::class, AnswerRepository::class);
        app()->bind(CommentRepositoryInterface::class, CommentRepository::class);
        app()->bind(UserRepositoryInterface::class, UserRepository::class);
    }

    private function isQuestionContext(): bool
    {
        $path = request()->path();
        return str_contains($path, 'questions');
    }
}
