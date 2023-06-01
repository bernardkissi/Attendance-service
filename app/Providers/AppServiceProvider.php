<?php

namespace App\Providers;

use App\Domain\Qrcodes\Generators\qrcode\ServiceQrcodeGenerator;
use App\Models\User;
use App\Domain\Support\DateManager;
use Illuminate\Support\Facades\Auth;
use App\Domain\Tenants\TenantManager;
use App\Domain\Qrcodes\QrcodeGenerator;
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

        $this->app->singleton(QrcodeGenerator::class, function () {
            return new ServiceQrcodeGenerator();
        });
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // Find the user you want to stimulate login
        $user = User::find(2);

        // Set the user as the authenticated user
        Auth::setUser($user);
    }
}
