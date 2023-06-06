<?php

namespace App\Domain\Support;

class DistanceCalculator
{
    public function __construct(
        public string $branchLatitude,
        public string $branchLongitude,
        public string $memberLatitude,
        public string $memberLongitude
    ) {
    }

    public function calculate(): float
    {
        $earthRadius = 6371; // in kilometers
        $lat1Rad = deg2rad($this->branchLatitude);
        $lat2Rad = deg2rad($this->memberLatitude);
        $deltaLat = deg2rad($this->memberLatitude - $this->branchLatitude);
        $deltaLon = deg2rad($this->memberLongitude - $this->branchLongitude);
        $a = sin($deltaLat / 2) * sin($deltaLat / 2) + cos($lat1Rad) * cos($lat2Rad) * sin($deltaLon / 2) * sin($deltaLon / 2);
        $c = 2 * atan2(sqrt($a), sqrt(1 - $a));
        $distance = $earthRadius * $c;

        return round($distance, 2);
    }
}
