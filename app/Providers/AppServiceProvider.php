<?php

namespace App\Providers;

use App\Domain\Tenants\TenantManager;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->singleton(TenantManager::class, function () {
            return new TenantManager();
        });
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // Find the user you want to stimulate login
        //$user = User::find(2);

        // Set the user as the authenticated user
        // Auth::setUser($user);
    }
}
