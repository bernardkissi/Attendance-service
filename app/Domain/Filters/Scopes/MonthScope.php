<?php

declare(strict_types=1);

namespace App\Domain\Filters\Scopes;

use App\Domain\Filters\FilterQuery;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\DB;

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
