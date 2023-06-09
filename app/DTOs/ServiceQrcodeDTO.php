<?php

namespace App\DTOs;

use App\Domain\Support\DateManager;
use App\Domain\Tenants\TenantManager;
use App\Models\Service;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;

class ServiceQrcodeDTO
{
    public function __construct(
        public readonly Service $service,
        public readonly string $active_at,
        public readonly string $expires_at,
        public readonly string|array $service_date,
        public readonly array $location,
        public readonly ?float $distance_threshold,
        public readonly array $verifiers
    ) {
    }

    public static function fromRequest(DateManager $dateManager, Request $request): static
    {
        $service = static::resolveService($request->serviceId);
        $configuration = static::getConfiguration($request->config);

        return new static(
            $service,
            $request->active_at ?? $dateManager->getServiceActiveTime($service),
            $request->expires_at ?? $dateManager->getServiceExpiryTime($service),
            $request->service_date ?? $dateManager->getServiceDate($service),
            $configuration['location'],
            $configuration['distance_threshold'],
            $configuration['verifiers']
        );
    }

    public function toArray(): array
    {
        return [
            'active_at' => $this->active_at,
            'expires_at' => $this->expires_at,
            'service_date' => $this->service_date,
            'location' => json_encode($this->location),
            'distance_threshold' => $this->distance_threshold,
            'verifiers' => json_encode($this->verifiers),
        ];
    }

    private static function resolveService(int $serviceId): Service
    {
        $service = Service::find($serviceId);

        if ($service) {
            return $service;
        }

        throw new ModelNotFoundException('The service with id ' . $serviceId . ' does not exist');
    }

    private static function getConfiguration(array $config): array
    {
        if (empty($config)) {
            return app(TenantManager::class)->getTenantConfig()->options;
        }

        return $config;
    }
}
