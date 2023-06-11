<?php

declare(strict_types=1);

namespace App\Domain\Verification\Service;

use App\Domain\Verification\Checks\Checker;
use App\Domain\Verification\Checks\LocationCheck;
use App\Domain\Verification\Checks\MembershipCheck;
use App\Domain\Verification\Checks\TimeCheck;
use App\DTOs\VerificationDTO;
use Illuminate\Support\Collection;

class VerificationService implements Verification
{
    public array $checks = [
        'time' => TimeCheck::class,
        'location' => LocationCheck::class,
        'membership' => MembershipCheck::class,
    ];

    public function __construct(
        public VerificationDTO $dto
    ) {
    }

    public function check(): bool
    {
        return $this->getActiveChecks()
            ->map(fn (Checker $check) => $check->verify($this->dto))
            ->every(fn ($result) => $result === true);
    }

    public function getActiveChecks(): Collection
    {
        if (empty($this->dto->qrcode->checks)) {
            return collect($this->checks)
                ->map(fn ($check) => new $check());
        }

        return collect($this->dto->qrcode->checks)
            ->filter(fn ($check) => $check)
            ->map(fn ($check, $key) => new $this->checks[$key]());
    }
}
