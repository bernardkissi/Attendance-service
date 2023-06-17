<?php

namespace App\Domain\Verification\Checks;

use App\Domain\Support\DistanceCalculator;
use App\DTOs\VerificationDTO;
use InvalidArgumentException;

class LocationCheck extends Checker
{
    public function verify(VerificationDTO $dto): bool
    {
        $branchLatitude = $dto->qrcode->location['latitude'];
        $branchLongitude = $dto->qrcode->location['longitude'];

        if (! isset($dto->memberLocation)) {
            throw new InvalidArgumentException('Member location must not be empty.');
        }

        $memberLatitude = $dto->memberLocation['latitude'];
        $memberLongitude = $dto->memberLocation['longitude'];

        $calculator = new DistanceCalculator(
            $branchLatitude,
            $branchLongitude,
            $memberLatitude,
            $memberLongitude
        );

        $distance = $calculator->calculate();

        return $distance <= $dto->qrcode->distance_threshold;
    }
}
