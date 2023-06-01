<?php

namespace App\Providers;

use App\Domain\Qrcodes\Generators\pdf\PdfQrcodeGenerator;
use App\Domain\Qrcodes\Generators\qrcode\ServiceQrcodeGenerator;
use App\Domain\Qrcodes\PdfGenerator;
use App\Domain\Qrcodes\QrcodeGenerator;
use Illuminate\Contracts\Support\DeferrableProvider;
use Illuminate\Support\ServiceProvider;

class GeneratorServiceProvider extends ServiceProvider implements DeferrableProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->app->singleton(QrcodeGenerator::class, function () {
            return new ServiceQrcodeGenerator();
        });

        $this->app->singleton(PdfGenerator::class, function () {
            return new PdfQrcodeGenerator();
        });
    }

    /**
     * Get the services provided by the provider.
     *
     * @return array<int, string>
     */
    public function provides(): array
    {
        return [QrcodeGenerator::class, PdfGenerator::class];
    }
}
