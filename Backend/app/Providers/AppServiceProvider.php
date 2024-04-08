<?php

namespace App\Providers;

use App\Enums\Role;
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

        Gate::define(ability: "manage-dashboard", callback: function ($user) {
            return $user->role_id === Role::ADMIN->value;
        });
        Gate::define(ability: "student-questions", callback: function ($user) {
            return $user->role_id === Role::STUDENT->value && $user->is_verified;
        });
        Gate::define(ability: "student", callback: function ($user) {
            return $user->role_id === Role::STUDENT->value && $user->is_verified;
        });
    }
}
