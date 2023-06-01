<?php

declare(strict_types=1);

namespace App\Domain\Support;

use Carbon\Carbon;

class TimeManager
{
    public function addHoursToTime(string $time, int $hours): string
    {
        $carbonTime = Carbon::createFromFormat('H:i:s', $time);
        $time = $carbonTime->addHours($hours)->format('H:i:s');

        return $time;
    }

    public function subHoursFromTime(string $time, int $hours): string
    {
        $carbonTime = Carbon::createFromFormat('H:i:s', $time);
        $time = $carbonTime->subHours($hours)->format('H:i:s');

        return $time;
    }
}
