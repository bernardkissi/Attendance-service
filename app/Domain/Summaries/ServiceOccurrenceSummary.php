<?php

declare(strict_types=1);

namespace App\Domain\Summaries;

use App\DTOs\FilterQueryDTO;
use App\Models\Service;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;

class ServiceOccurrenceSummary implements Statistics
{
    public function __construct(
        public ?Service $service = null,
    ) {
    }

    public function summarize(FilterQueryDTO $filters = null): Collection
    {
        return $this->buildQuery($filters)->get();
    }

    public function buildQuery(FilterQueryDTO $filters = null): Builder
    {
        //TODO: add filters (filter by year, by month)
        return Service::query()
            ->select(
                'services.id AS service_id',
                'services.name AS service_name',
                DB::raw('COUNT(qrcodes.id) AS total_service_occurrences'),
                DB::raw('MONTHNAME(qrcodes.created_at) AS month')
            )
            ->when($this->service, function ($query) {
                $query->whereKey($this->service->id);
            })
            ->leftJoin('qrcodes', 'services.id', '=', 'qrcodes.service_id')
            ->groupBy('services.id', 'services.name', 'month');
    }
}
