<?php

declare(strict_types=1);

namespace App\Actions\Reports;

use App\Actions\Action;
use App\Domain\Reporter\ReportingService;
use App\Enums\ReportType;

class GenerateReport implements Action
{
    public function generate(ReportType $type)
    {
        $type = isset($type) ? $type : ReportType::MONTHLY;
        $report = new ReportingService($type);

        return $report->generateReport();
    }
}
