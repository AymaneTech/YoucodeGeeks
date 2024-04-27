<?php

namespace App\Providers;

use App\Enums\Role;
use App\Models\Answer;
use App\Models\Blog;
use App\Models\Comment;
use App\Models\Question;
use App\Policies\AnswerPolicy;
use App\Policies\BlogPolicy;
use App\Policies\CommentPolicy;
use App\Policies\QuestionPolicy;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register()
    {}

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Model::shouldBeStrict();
        Gate::policy(Question::class, QuestionPolicy::class);
        Gate::policy(Answer::class, AnswerPolicy::class);
        Gate::policy(Blog::class, BlogPolicy::class);
        Gate::policy(Comment::class, CommentPolicy::class);

        Gate::define(ability: "manage-dashboard", callback:  function ($user) {
            return $user->role_id === Role::ADMIN->value;
        });
        Gate::define(ability: "student-questions", callback: function ($user) {
            return $user->role_id === Role::STUDENT->value && $user->is_verified;
        });
    }
}
