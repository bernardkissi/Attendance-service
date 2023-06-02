<?php

namespace App\DTOs;

class ServiceConfigObject
{
    public function __construct(
        public array $location,
        public array $verifiers,
        public string $distance_threshold,
        public int $expiry_threshold
    ) {
    }

    public static function getServiceConfig(array $config): static
    {
        return new static(
            $config['location'],
            $config['verifiers'],
            $config['distance_threshold'],
            $config['expiry_threshold']
        );
    }

    public function toArray(): array
    {
        return [
            'location' => $this->location,
            'verifiers' => $this->verifiers,
            'distance_threshold' => $this->distance_threshold,
            'expiry_threshold' => $this->expiry_threshold,
        ];
    }
}
