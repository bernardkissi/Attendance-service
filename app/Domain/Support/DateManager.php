<?php

declare(strict_types=1);

namespace App\Domain\Support;

use App\Enums\ServiceType;
use App\Models\Service;
use Carbon\Carbon;
use Exception;

class DateManager
{
    public function getServiceDate(Service $service): string
    {
        return match ($service->type) {
            ServiceType::NON_EXPIRABLE->value => $this->getExpiryDateForNonExpiryService($service->recurring_day, $service->end_time),
            ServiceType::ONE_TIME->value => $service->commence_date,
            ServiceType::RECURRING->value => $this->getExpiryDateForTimeBoundService($service->commence_date, $service->end_date, $service->end_time),
            default => throw new Exception('Service type is not supported')
        };
    }

    public function getServiceExpiryTime(Service $service): string
    {
        return $this->addOnServiceExpiryTime($service->end_time, 3);
    }

    public function getServiceActiveTime(Service $service): string
    {
        return $this->subOnServiceStartTime($service->start_time, 2);
    }

    private function getExpiryDateForNonExpiryService(string $day, string $endTime): string
    {
        $currentDay = Carbon::now()->startOfDay();

        return match (true) {
            // if today and  the service end time is not passed
            $currentDay->is($day) && ! $this->hasEventTimePassed($endTime) => $currentDay->format('Y-m-d'),
            // if today and the service has passed the end time to the next service day
            $currentDay->is($day) && $this->hasEventTimePassed($endTime) => $currentDay->next($day)->format('Y-m-d'),
            // set date to the next service day
            default => $currentDay->next($day)->format('Y-m-d'),
        };
    }

    private function addOnServiceExpiryTime(string $time, int $hours): string
    {
        $carbonTime = Carbon::createFromFormat('H:i:s', $time);
        $time = $carbonTime->addHours($hours)->format('H:i:s');

        return $time;
    }

    private function subOnServiceStartTime(string $time, int $hours): string
    {
        $carbonTime = Carbon::createFromFormat('H:i:s', $time);
        $time = $carbonTime->subHours($hours)->format('H:i:s');

        return $time;
    }

    private function getExpiryDateForTimeBoundService(string $startDate, string $endDate, string $endTime): string
    {
        $today = Carbon::now()->startOfDay();
        $startDate = Carbon::parse($startDate)->startOfDay();
        $endDate = Carbon::parse($endDate)->startOfDay();

        return match (true) {
            // checks if today is before the start date
            $today->lte($startDate) => $startDate->format('Y-m-d'),
            //checks if the event end date has passed
            $today->gt($endDate) => throw new Exception('Service has expired'),
            // returns today or the next day if falls between the start and end date
            $today->gte($startDate) && $today->lte($endDate) && $this->hasEventTimePassed($endTime) => $today->addDay(1)->format('Y-m-d'),
            // returns the start date bt defualt
            default => $today->format('Y-m-d')
        };
    }

    private function hasEventTimePassed(string $endTime): bool
    {
        $currentTime = Carbon::now();
        $endTime = Carbon::parse($endTime);

        return $currentTime->gt($endTime);
    }
}
