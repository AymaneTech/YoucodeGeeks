<?php

namespace App\Providers;

use App\Models\Blog;
use App\Models\Post;
use App\Models\Question;
use App\Repositories\Contracts\AnswerRepositoryInterface;
use App\Repositories\Contracts\CategoryRepositoryInterface;
use App\Repositories\Contracts\ClassRoomRepositoryInterface;
use App\Repositories\Contracts\CommentRepositoryInterface;
use App\Repositories\Contracts\ImageRepositoryInterface;
use App\Repositories\Contracts\PostRepositoryInterface;
use App\Repositories\Contracts\TagRepositoryInterface;
use App\Repositories\Eloquent\AnswerRepository;
use App\Repositories\Eloquent\BlogRepository;
use App\Repositories\Eloquent\CategoryRepository;
use App\Repositories\Eloquent\ClassRoomRepository;
use App\Repositories\Eloquent\CommentRepository;
use App\Repositories\Eloquent\ImageRepository;
use App\Repositories\Eloquent\QuestionRepository;
use App\Repositories\Eloquent\TagRepository;
use App\Services\Contracts\CommentServiceInterface;
use App\Services\Contracts\UploadImageInterface;
use App\Services\Implementations\UploadToCloudinaryService;
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
        // repositories
        app()->bind(CategoryRepositoryInterface::class, CategoryRepository::class);
        app()->bind(TagRepositoryInterface::class, TagRepository::class);
        app()->bind(ClassRoomRepositoryInterface::class, ClassRoomRepository::class);
        app()->bind(ImageRepositoryInterface::class, ImageRepository::class);
        app()->bind(AnswerRepositoryInterface::class, AnswerRepository::class);
        app()->bind(CommentRepositoryInterface::class, CommentRepository::class);
    }

    private function isQuestionContext(): bool
    {
        $path = request()->path();
        return str_contains($path, 'questions');
    }
}
