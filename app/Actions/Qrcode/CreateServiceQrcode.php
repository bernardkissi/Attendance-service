<?php

declare(strict_types=1);

namespace App\Actions\Qrcode;

use App\Actions\Action;
use App\Domain\Qrcodes\QrcodeGenerator;
use App\DTOs\ServiceQrcodeDTO;
use Illuminate\Support\Collection;

class CreateServiceQrcode implements Action
{
    public static function create(ServiceQrcodeDTO $serviceQrcodeDTO): void
    {
        // service-qrcode relation
        $serviceQrcode = $serviceQrcodeDTO->service->qrcodes();

        // create qrcodes for a service
        if (is_array($serviceQrcodeDTO->service_date)) {
            $qrcodes = $serviceQrcode->createMany(static::createManyQrcodes($serviceQrcodeDTO)->toArray());
        }
        // create a single qrcode for a service
        if (is_string($serviceQrcodeDTO->service_date)) {
            $qrcodes = $serviceQrcode->create($serviceQrcodeDTO->toArray());
        }

        $qrcodeGenerator = app(QrcodeGenerator::class);

        // create qrcode(s) and store in media
        $qrcodes instanceof Collection ?
            $qrcodeGenerator->generateMultiple($qrcodes) :
            $qrcodeGenerator->generate($qrcodes);
    }

    private static function createManyQrcodes(ServiceQrcodeDTO $serviceQrcodeDTO): Collection
    {
        $qrcodes = collect($serviceQrcodeDTO->service_date)
            ->map(function (string $date) use ($serviceQrcodeDTO) {
                return [...$serviceQrcodeDTO->toArray(), 'service_date' => $date];
            });

        return $qrcodes;
    }
}
