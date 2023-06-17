<?php

declare(strict_types=1);

namespace App\Domain\Verification\Checks;

use App\DTOs\VerificationDTO;
use App\Models\Member;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class MembershipCheck extends Checker
{
    public function verify(VerificationDTO $dto): bool
    {
        $branchId = $dto->qrcode->branch_id;
        $serviceId = $dto->qrcode->service_id;

        if (!$dto->member || !$dto->member instanceof Member) {
            throw new ModelNotFoundException('No Member was found');
        }

        $branch = $dto->member->branch;
        $service = $branch->services()->select('id', 'branch_id')->whereId($serviceId)->first();

        if (!$service) {
            throw new ModelNotFoundException('Service not found');
        }

        // Checks if the service belongs to the branch and serviceId matches the service
        return $service->branch_id === $branchId && $service->id === $serviceId;
    }
}
