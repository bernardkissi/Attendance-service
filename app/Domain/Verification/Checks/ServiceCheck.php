<?php

declare(strict_types=1);

namespace App\Domain\Verification\Checks;

use App\DTOs\VerificationDTO;
use App\Domain\Verification\Checks\Checker;

class ServiceCheck extends Checker
{
    public function verify(VerificationDTO $dto): bool
    {
        dd();
    }
}

// $branch = $dto->member->branch;
// $service = $branch->services()->select('id', 'branch_id')->whereId($serviceId)->first();

// if (!$service) {
//     throw new ModelNotFoundException('Service not found');
// }
