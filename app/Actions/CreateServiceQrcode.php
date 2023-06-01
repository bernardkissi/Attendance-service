<?php

declare(strict_types=1);

namespace App\Actions;

use App\Models\Service;
use App\Enums\ServiceType;
use App\Models\Configuration;
use App\Domain\Support\DateManager;
use App\Domain\Qrcodes\QrcodeGenerator;
use App\DataObjects\ServiceConfigObject;

class CreateServiceQrcode implements Action
{
    public function __construct(
        public Service $service,
        public Configuration $configuration,
        public DateManager $dateManager,
        public ?ServiceConfigObject $config = null,
    ) {
    }

    public function __invoke()
    {
        // create qrcode model object
        $qrcode = $this->service->qrcodes()->create([
            'expires_at' => $this->getExpiryTime($this->service),
            'service_date' => $this->getServiceDate($this->service),
            'location' => json_encode($this->getConfiguration()['location']),
            'distance_threshold' => $this->getConfiguration()['distance_threshold'],
            'verifiers' => json_encode($this->getConfiguration()['verifiers']),
        ]);

        dd($qrcode);
        // create qrcode
        app(QrcodeGenerator::class)->generate($qrcode);

        // and update qrcode
    }

    private function getServiceDate(Service $service): string
    {
        if ($service->type === ServiceType::NON_EXPIRABLE->value) {
            return $this->dateManager->getExpiryDateForNonExpiryService($this->service->recurring_day);
        }

        if ($service->type === ServiceType::ONE_TIME->value) {
            return $service->commence_date;
        }

        if ($service->type === ServiceType::RECURRING->value) {
            return $this->dateManager->getExpiryDateForTimeBoundService($service->commence_date, $service->end_date);
        }
    }

    private function getExpiryTime(Service $service): string
    {
        return $this->dateManager->addOnServiceExpiryTime($service->end_time, 3);
    }

    private function getConfiguration(): array
    {
        if (!isset($this->config)) {
            return $this->configuration->options;
        }

        return $this->config->toArray();
    }
}
