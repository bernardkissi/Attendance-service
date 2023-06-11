<?php

namespace App\Jobs;

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
        // Get all QR codes running today
        // $qrcodes = Qrcode::whereDate('start_date', '<=', now())
        //     ->whereDate('end_date', '>=', $currentDate)
        //     ->get();

        // // Check and mark expired QR codes
        // foreach ($qrcodes as $qrcode) {
        //     if (Carbon::parse($qrcode->end_date . ' ' . $qrcode->end_time)->isPast()) {
        //         $qrcode->update(['expired' => true]);
        //     }
        // }
    }
}
