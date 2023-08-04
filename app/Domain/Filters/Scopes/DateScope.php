<?php

declare(strict_types=1);

namespace App\Domain\Filters\Scopes;

use App\Domain\Filters\FilterQuery;
use Illuminate\Database\Eloquent\Builder;

class DateScope implements FilterQuery
{
    public function apply(Builder $builder, string|array $dates): Builder
    {
        return $builder->whereBetween('service_id', $dates);
    }
}
