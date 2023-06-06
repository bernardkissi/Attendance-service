<?php

declare(strict_types=1);

namespace App\Domain\Verification\Checks;

use App\DTOs\VerificationDTO;
use Carbon\Carbon;
use Carbon\CarbonImmutable;

class TimeCheck extends Checker
{
    public function verify(VerificationDTO $dto): bool
    {
        // convert inputs into appropriate formats
        $verifying_at = Carbon::now();
        $active_at = CarbonImmutable::parse("{$dto->qrcode->service_date} {$dto->qrcode->active_at}");
        $expires_at = CarbonImmutable::parse("{$dto->qrcode->service_date} {$dto->qrcode->expires_at}");

        // Check if the verifyng datetime falls within the service datetime range
        return $verifying_at->gte($active_at) && $verifying_at->lte($expires_at);
    }
}
