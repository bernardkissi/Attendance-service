<?php

declare(strict_types=1);

namespace App\Domain\Support;

use Carbon\Carbon;

class DateManager
{
    public function getExpiryDateForNonExpiryService(string $day): string
    {
        $currentDay = Carbon::now()->startOfDay();
        if (strtolower($currentDay->format('l')) === strtolower($day)) {
            return $currentDay->format('Y-m-d');
        }

        return $currentDay->next($day)->format('Y-m-d');
    }

    public function getExpiryDateForTimeBoundService(string $startDate, string $endDate): string
    {
        $today = Carbon::now()->startOfDay();
        $startDate = Carbon::parse($startDate)->startOfDay();
        $endDate = Carbon::parse($endDate)->startOfDay();

        //checks if the event end date has passed
        if ($today->gt($endDate)) {
            return 'Error: End date has already passed.';
        }
        // returns today or the next day if falls between the start and end date
        if ($today->gte($startDate) && $today->lte($endDate)) {
            return $today->format('Y-m-d');
        }
        // returns the start date bt defualt
        return $startDate->format('Y-m-d');
    }

    public function addOnServiceExpiryTime(string $time, int $hours): string
    {
        $carbonTime = Carbon::createFromFormat('H:i:s', $time);
        $time = $carbonTime->addHours($hours)->format('H:i:s');

        return $time;
    }

    public function subFromServiceExpiryTime(string $time, int $hours): string
    {
        $carbonTime = Carbon::createFromFormat('H:i:s', $time);
        $time = $carbonTime->subHours($hours)->format('H:i:s');

        return $time;
    }
}
