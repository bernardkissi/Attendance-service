<?php

declare(strict_types=1);

namespace App\Domain\Reporter\Filters;

use App\Domain\Reporter\FilterQuery;
use Illuminate\Database\Eloquent\Builder;

class DateScope implements FilterQuery
{
    public function apply(Builder $builder, string|array $dates): Builder
    {
        return $builder->whereBetween('service_id', $dates);
    }
}
