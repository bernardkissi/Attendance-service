<?php

declare(strict_types=1);

namespace App\Domain\Verification\Checks;

use App\DTOs\VerificationDTO;
use Carbon\CarbonImmutable;

class TimeCheck extends Checker
{
    public function verify(VerificationDTO $dto): Result
    {
        // convert inputs into appropriate formats
        $verifying_at = now();
        $active_at = CarbonImmutable::parse("{$dto->qrcode->service_date} {$dto->qrcode->active_at}");
        $expires_at = CarbonImmutable::parse("{$dto->qrcode->service_date} {$dto->qrcode->expires_at}");

        // Check if the verifyng datetime falls within the service datetime range
        $result = $verifying_at->gte($active_at) && $verifying_at->lte($expires_at);

        return match ($result) {
            true => new Result($result),
            false => new Result($result, 'Service time is not within the active time range'),
        };

    }
}
