<?php

declare(strict_types=1);

namespace App\Actions\Summaries;

use App\Actions\Action;
use App\Domain\Summaries\ServiceOccurrenceSummary;
use App\Models\Service;
use Illuminate\Support\Collection;

class FetchServiceSummary implements Action
{
    public function get(Service $service): Collection
    {
        $serviceoccurences = new ServiceOccurrenceSummary($service);

        return $serviceoccurences->summarize();
    }

    public function all(): Collection
    {
        $serviceoccurences = new ServiceOccurrenceSummary();

        return $serviceoccurences->summarize();
    }
}
