<?php

declare(strict_types=1);

namespace App\Domain\Support;

use App\Enums\ServiceType;
use App\Models\Service;
use Carbon\Carbon;
use Exception;

class DateManager
{
    public function getServiceDate(Service $service): string|array
    {
        return match ($service->type) {
            ServiceType::NON_EXPIRABLE->value => $this->getDateForNonExpiryService($service->recurring_day, $service->end_time),
            ServiceType::ONE_TIME->value => $service->commence_date,
            ServiceType::RECURRING->value => $this->getDatesForRecurringService($service->commence_date, $service->end_date),
            default => throw new Exception('Service type is not supported')
        };
    }

    private function getDateForNonExpiryService(string $day, string $endTime): string
    {
        if (! now()->is($day) || now()->gt($endTime)) {
            return now()->next($day)->format('Y-m-d');
        }

        return now()->format('Y-m-d');
    }

    private function getDatesForRecurringService(string $startDate, string $endDate): array
    {
        $dates = Carbon::parse("{$startDate}")->toPeriod("{$endDate}", '1 days');
        $dates = $dates->map(fn ($date) => $date->format('Y-m-d'));

        return iterator_to_array($dates);
    }

    public function getServiceExpiryTime(Service $service, int $hours = 3): string
    {
        return Carbon::parse($service->end_time)->addHours($hours)
            ->format('H:i:s');
    }

    public function getServiceActiveTime(Service $service, int $hours = 2): string
    {
        return Carbon::parse($service->start_time)->addHours($hours)
            ->format('H:i:s');
    }
}
