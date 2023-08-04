<?php

declare(strict_types=1);

namespace App\Domain\Filters\Scopes;

use App\Domain\Filters\FilterQuery;
use Illuminate\Database\Eloquent\Builder;

class YearScope implements FilterQuery
{
    public function apply(Builder $builder, string|array $year): Builder
    {
        if (is_string($year)) {
            return $builder->whereYear('recorded_at', $year);
        }

        return $builder;
    }
}
