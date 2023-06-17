<?php

namespace App\Console;

use App\Jobs\MonitorQrcodesJob;
use App\Jobs\MonitorServicesJob;
use App\Models\Qrcode;
use App\Models\Service;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Stringable;

class Kernel extends ConsoleKernel
{
    /**
     * Define the application's command schedule.
     */
    protected function schedule(Schedule $schedule): void
    {
        // Monitor recurring non-expirey services
        $schedule->job(new MonitorServicesJob)->daily()->at('00:00')
            ->skip(function () {
                return Service::nonExpiryServicesActiveToday()->get()->count() > 0;
            })->onSuccess(function (Stringable $output) {
                Log::info('Monitor services - success', $output);
            })
            ->onFailure(function (Stringable $output) {
                Log::error('Monitor services - failed', $output);
            });

        // Track services and mark them as expired if its closed
        $schedule->job(new MonitorQrcodesJob)->everyMinute()
            ->skip(function () {
                return Qrcode::isCurrentlyRunning()->get() > 0;
            })->onSuccess(function (Stringable $output) {
                Log::info('Monitor Qrcodes - success', $output);
            })
            ->onFailure(function (Stringable $output) {
                Log::error('Monitor Qrcodes - failed', $output);
            });
    }

    /**
     * Register the commands for the application.
     */
    protected function commands(): void
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }
}
