<?php

namespace App\Providers;

use App\Models\Blog;
use App\Models\Question;
use App\Repositories\Contracts\{AnswerRepositoryInterface,
    CampusRepositoryInterface,
    CategoryRepositoryInterface,
    ClassRoomRepositoryInterface,
    CommentRepositoryInterface,
    ImageRepositoryInterface,
    PostRepositoryInterface,
    TagRepositoryInterface,
    UserRepositoryInterface};
use App\Repositories\Implementations\{AnswerRepository,
    BlogRepository,
    CampusRepository,
    CategoryRepository,
    ClassRoomRepository,
    CommentRepository,
    ImageRepository,
    QuestionRepository,
    TagRepository,
    UserRepository};
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
        app()->bind(CampusRepositoryInterface::class, CampusRepository::class);
    }

    private function isQuestionContext(): bool
    {
        $path = request()->path();
        return str_contains($path, 'questions');
    }
}
