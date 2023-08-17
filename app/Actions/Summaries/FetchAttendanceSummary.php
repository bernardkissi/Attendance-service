<?php

declare(strict_types=1);

namespace App\Actions\Summaries;

use App\Actions\Action;
use App\Domain\Summaries\AttendanceSummary;
use App\DTOs\FilterQueryDTO;
use Illuminate\Support\Collection;

class FetchAttendanceSummary implements Action
{
    public function get(FilterQueryDTO $dto): Collection
    {
        $summary = new AttendanceSummary();

        return $summary->summarize($dto);
    }
}
