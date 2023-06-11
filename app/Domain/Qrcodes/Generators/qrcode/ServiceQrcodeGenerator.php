<?php

declare(strict_types=1);

namespace App\Domain\Qrcodes\Generators\qrcode;

use App\Domain\Qrcodes\QrcodeGenerator;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Collection;
use SimpleSoftwareIO\QrCode\Facades\QrCode;

class ServiceQrcodeGenerator implements QrcodeGenerator
{
    public function generate(Model $model): void
    {
        QrCode::format('png')
            ->size(500)
            ->generate(
                $model->identifier,
                storage_path(config('qrcode.storage_path')."{$model->service->name}-{$model->service_date}.png")
            );

        $model
            ->addMedia(storage_path(config('qrcode.storage_path')."{$model->service->name}-{$model->service_date}.png"))
            ->toMediaCollection('qrcodes');
    }

    public function generateMultiple(Collection $collection): void
    {
        $collection->map(function (Model $model) {
            QrCode::format('png')
                ->size(500)
                ->generate(
                    $model->identifier,
                    storage_path(config('qrcode.storage_path')."{$model->service->name}-{$model->service_date}.png")
                );

            $model
                ->addMedia(storage_path(config('qrcode.storage_path')."{$model->service->name}-{$model->service_date}.png"))
                ->toMediaCollection('qrcodes');
        });
    }
}
