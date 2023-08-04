<?php

declare(strict_types=1);

namespace App\Domain\Reporter\Reports;

use App\Domain\Reporter\Reporter;
use Illuminate\Support\Collection;

class MonthlyReport extends Reporter
{
    public function report(): Collection
    {
        $report = $this->defaultQuery()->get();

        return $this->getAttendanceData($report, ['service', 'month']);
    }
}
