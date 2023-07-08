<?php

declare(strict_types=1);

namespace App\Domain\Reporter\Filters;

use App\Domain\Reporter\FilterQuery;
use Illuminate\Database\Eloquent\Builder;

class ServiceScope implements FilterQuery
{
    public function apply(Builder $builder, string|array $services): Builder
    {
        if (is_string($services)) {
            return $builder->whereServiceId($services);
        }

        return $builder->whereIn('service_id', $services);
    }
}
