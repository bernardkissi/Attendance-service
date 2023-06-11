<?php

declare(strict_types=1);

namespace App\Actions;

use App\Domain\Qrcodes\QrcodeGenerator;
use App\DTOs\ServiceQrcodeDTO;
use Illuminate\Support\Collection;

class CreateServiceQrcode implements Action
{
    public function __construct(
        public ServiceQrcodeDTO $serviceQrcodeDTO,
    ) {
    }

    public function exec(): void
    {
        // service-qrcode relation
        $serviceQrcode = $this->serviceQrcodeDTO->service->qrcodes();

        // create qrcodes for a service
        if (is_array($this->serviceQrcodeDTO->service_date)) {
            $qrcodes = $serviceQrcode->createMany($this->createManyQrcodes()->toArray());
        }
        // create a single qrcode for a service
        if (is_string($this->serviceQrcodeDTO->service_date)) {
            $qrcode = $serviceQrcode->create($this->serviceQrcodeDTO->toArray());
        }

        $qrcodeGenerator = app(QrcodeGenerator::class);

        // create qrcode(s) and store in media
        $qrcodes instanceof Collection ?
            $qrcodeGenerator->generateMultiple($qrcodes) :
            $qrcodeGenerator->generate($qrcode);
    }

    private function createManyQrcodes(): Collection
    {
        $qrcodes = collect($this->serviceQrcodeDTO->service_date)
            ->map(function (string $date) {
                return [...$this->serviceQrcodeDTO->toArray(), 'service_date' => $date];
            });

        return $qrcodes;
    }
}
