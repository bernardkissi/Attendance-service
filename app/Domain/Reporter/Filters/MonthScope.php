<?php

declare(strict_types=1);

namespace App\Domain\Reporter\Filters;

use Illuminate\Support\Facades\DB;
use App\Domain\Reporter\FilterQuery;
use Illuminate\Database\Eloquent\Builder;

class MonthScope implements FilterQuery
{
    public function apply(Builder $builder, string|array $months): Builder
    {
        if (is_string($months)) {
            return $builder->whereMonth('recorded_at', $months);
        }
        return $builder->whereIn(DB::raw('MONTH(recorded_at)'), $months);
    }
}
