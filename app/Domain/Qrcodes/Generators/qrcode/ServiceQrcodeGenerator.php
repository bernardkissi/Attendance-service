<?php

declare(strict_types=1);

namespace App\Domain\Qrcodes\Generators\qrcode;

use Illuminate\Database\Eloquent\Model;
use SimpleSoftwareIO\QrCode\Facades\QrCode;
use App\Domain\Qrcodes\QrcodeGenerator;

class ServiceQrcodeGenerator implements QrcodeGenerator
{
    public function generate(Model $model): void
    {
        QrCode::format('png')
            ->size(500)
            ->generate(
                $model->uuid,
                storage_path(config('qrcode.storage_path') . "{$model->service_date}.png")
            );

        $model
            ->addMedia(storage_path(config('qrcode.storage_path') . "{$model->service_date}.png"))
            ->toMediaCollection('qrcodes');
    }
}
