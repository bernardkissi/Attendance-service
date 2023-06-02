<?php

declare(strict_types=1);

namespace App\Actions;

use App\Domain\Qrcodes\QrcodeGenerator;
use App\DTOs\ServiceQrcodeDTO;

class CreateServiceQrcode implements Action
{
    public function __construct(
        public ServiceQrcodeDTO $serviceQrcodeDTO,
    ) {
    }

    public function exec(): void
    {
        //create a qrcode for a service from ServiceQrcodeDTO
        $qrcode = $this->serviceQrcodeDTO->service
            ->qrcodes()->create($this->serviceQrcodeDTO->toArray());

        // create qrcode and store in media
        app(QrcodeGenerator::class)->generate($qrcode);
    }
}
