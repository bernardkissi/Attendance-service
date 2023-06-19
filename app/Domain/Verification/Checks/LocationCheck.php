<?php

namespace App\Domain\Verification\Checks;

use App\Domain\Support\DistanceCalculator;
use App\DTOs\VerificationDTO;
use InvalidArgumentException;

class LocationCheck extends Checker
{
    public function verify(VerificationDTO $dto): Result
    {
        // branch default location information
        $branchLatitude = $dto->qrcode->location['latitude'];
        $branchLongitude = $dto->qrcode->location['longitude'];

        if (! isset($dto->memberLocation)) {
            throw new InvalidArgumentException('Member location must not be empty.');
        }

        // the current location of the member
        $memberLatitude = $dto->memberLocation['latitude'];
        $memberLongitude = $dto->memberLocation['longitude'];

        $calculator = new DistanceCalculator(
            $branchLatitude,
            $branchLongitude,
            $memberLatitude,
            $memberLongitude
        );

        $distance = $calculator->calculate();

        // checks if the current location of the member is within the distance of the church
        $result = $distance <= $dto->qrcode->distance_threshold;

        return match ($result) {
            true => new Result($result),
            false => new Result($result, 'Your location is too far away.'),
        };
    }
}
