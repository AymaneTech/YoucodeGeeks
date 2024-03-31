<?php

namespace App\Providers;

use App\Contracts\Services\UploadImageInterface;
use App\Enums\Role;
use App\Services\UploadToCloudinaryService;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Model::shouldBeStrict();
        app()->bind(
            UploadImageInterface::class,
            UploadToCloudinaryService::class
        );


        Gate::define(ability: "manage-categories", callback: function ($user) {
            return $user->role_id === Role::ADMIN->value;
        });
    }
}
