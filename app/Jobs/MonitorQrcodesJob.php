<?php

namespace App\Jobs;

use App\Models\Qrcode;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class MonitorQrcodesJob implements ShouldQueue
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
        // this job will get all qrcodes runing today
        $serviceQrsRunning = Qrcode::isCurrentlyRunning()->get();

        // and check if they service is closed and mark them as expired
        $serviceQrsRunning->filter(function (Qrcode $qrcode) {
            return $qrcode->serviceClosed;
        })->update(['expired_on' => now()]);
    }
}
