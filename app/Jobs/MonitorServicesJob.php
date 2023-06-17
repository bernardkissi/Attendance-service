<?php

namespace App\Jobs;

use App\Actions\CreateServiceQrcode;
use App\DTOs\ServiceQrcodeDTO;
use App\Models\Service;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class MonitorServicesJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     */
    public function __construct()
    {
        //
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        // Get all non-expiry recurring services happening to day
        $recurringServices = Service::nonExpiryServicesActiveToday()->get();

        // Automatically generate qrcode for each service
        $recurringServices->map(function (Service $service) {
            $serviceQrcodeDTO = ServiceQrcodeDTO::fromModel($service);
            $qrcode = new CreateServiceQrcode($serviceQrcodeDTO);
            $qrcode->exec();
        });
    }
}
