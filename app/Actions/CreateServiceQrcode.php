<?php

declare(strict_types=1);

namespace App\Actions;

use App\DataObjects\ServiceConfigObject;
use App\Domain\Qrcodes\QrcodeGenerator;
use App\Domain\Support\DateManager;
use App\Models\Configuration;
use App\Models\Service;

class CreateServiceQrcode implements Action
{
    public function __construct(
        public Service $service,
        public Configuration $configuration,
        public DateManager $dateManager,
        public ?ServiceConfigObject $config = null,
    ) {
    }

    public function __invoke(): void
    {
        // create qrcode model object
        $qrcode = $this->service->qrcodes()->create([
            'expires_at' => $this->dateManager->getServiceExpiryTime($this->service),
            'service_date' => $this->dateManager->getServiceDate($this->service),
            'location' => json_encode($this->getConfiguration()['location']),
            'distance_threshold' => $this->getConfiguration()['distance_threshold'],
            'verifiers' => json_encode($this->getConfiguration()['verifiers']),
        ]);

        // create qrcode and store in media
        app(QrcodeGenerator::class)->generate($qrcode);
    }

    private function getConfiguration(): array
    {
        if (! isset($this->config)) {
            return $this->configuration->options;
        }

        return $this->config->toArray();
    }
}
