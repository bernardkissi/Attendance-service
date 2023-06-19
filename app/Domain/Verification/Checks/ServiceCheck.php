<?php

declare(strict_types=1);

namespace App\Domain\Verification\Checks;

use App\DTOs\VerificationDTO;
use App\Models\Service;

class ServiceCheck extends Checker
{
    public function verify(VerificationDTO $dto): Result
    {
        $result = Service::query()
            ->where('id', $dto->qrcode->service_id)
            ->where('branch', $dto->qrcode->branch_id)
            ->exists();

        return match ($result) {
            true => new Result($result),
            false => new Result($result, 'Service does not exist'),
        };
    }
}
