<?php

declare(strict_types=1);

namespace App\DTOs;

use App\Models\Configuration;
use Illuminate\Http\Request;

readonly class ConfigurationDTO
{
    public function __construct(
        public array $checks,
        public array $location,
        public string $generate_qrcode,
        public string $generate_report,
        public string $verification_type,
        public int $distance_threshold,
        public bool $allow_visiting_members
    ) {

    }

    public static function fromRequest(Request $request): self
    {
        return new static(
            $request->options['checks'],
            $request->options['location'],
            $request->options['generate_qrcode'],
            $request->options['generate_report'],
            $request->options['verification_type'],
            $request->options['distance_threshold'],
            $request->options['allow_visiting_members'],
        );
    }

    public function hasChanged(Configuration $config): bool
    {
        return $config->options === request()->options;
    }

    public function toArray(): array
    {
        return [
            'checks' => $this->checks,
            'location' => $this->location,
            'generate_qrcode' => $this->generate_qrcode,
            'generate_report' => $this->generate_report,
            'verfication_type' => $this->verification_type,
            'distance_threshold' => $this->distance_threshold,
            'allow_visitors' => $this->allow_visiting_members,
        ];
    }
}
