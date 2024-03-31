install:
	sail composer update
	sail artisan breeze:install
	sail composer require barryvdh/laravel-debugbar --dev
	sail composer require rennokki/laravel-eloquent-query-cache
	sail composer require cviebrock/eloquent-sluggable
	sail php artisan vendor:publish --provider="Cviebrock\EloquentSluggable\ServiceProvider"
	sail composer require spatie/laravel-permission
	sail php artisan vendor:publish --provider="Spatie\Permission\PermissionServiceProvider"
	sail composer require beyondcode/laravel-query-detector --dev
	sail composer require laravel/telescope
	sail php artisan telescope:install
	sail composer require silverhand7/laravel-artisan-maker
	sail composer require --dev barryvdh/laravel-ide-helper
	sail composer require itsgoingd/clockwork
	#sail composer require "matte97p/laravel-postgresql-inherit ~2.7"
	#sail composer require barryvdh/laravel-dompdf
