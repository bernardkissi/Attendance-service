<?php

declare(strict_types=1);

namespace App\Domain\Reporter;

use App\Domain\Reporter\Reports\MonthlyReport;
use App\Domain\Reporter\Reports\YearlyReport;
use App\Enums\ReportType;
use Illuminate\Support\Collection;

class ReportingService
{
    public function __construct(
        public ReportType $reportType
    ) {
    }

    public function generateReport(): Collection
    {
        return match ($this->reportType->value) {
            'yearly' => (new YearlyReport())->report(),
            'monthly' => (new MonthlyReport())->report(),
        };
    }
}
