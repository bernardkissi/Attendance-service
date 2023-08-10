<?php

namespace App\Domain\Summaries;

use App\DTOs\FilterQueryDTO;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Collection;

interface Statistics
{
    public function summarize(FilterQueryDTO $filter = null): Collection;

    public function buildQuery(FilterQueryDTO $filter = null): Builder;
}
