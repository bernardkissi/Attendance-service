<?php

declare(strict_types=1);

namespace App\Domain\Verification;

use App\Domain\Verification\Checks\Checker;
use App\Domain\Verification\Checks\LocationCheck;
use App\Domain\Verification\Checks\MembershipCheck;
use App\Domain\Verification\Checks\Result;
use App\Domain\Verification\Checks\ServiceCheck;
use App\Domain\Verification\Checks\TimeCheck;
use App\DTOs\VerificationDTO;
use Illuminate\Support\Collection;

class VerificationService implements Verification
{
    public array $checks = [
        'time' => TimeCheck::class,
        'location' => LocationCheck::class,
        'membership' => MembershipCheck::class,
        'service' => ServiceCheck::class,
    ];

    public function __construct(
        public VerificationDTO $dto
    ) {
    }

    /**
     * Run all checks .
     *
     * @return Collection<Result>
     */
    public function runChecks(): Collection
    {
        return $this->getActiveChecks()
            ->map(fn (Checker $check) => $check->verify($this->dto));
    }

    // Get checks that needs to be applied before verification.
    private function getActiveChecks(): Collection
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
