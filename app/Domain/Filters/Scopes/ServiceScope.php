<?php

declare(strict_types=1);

namespace App\Domain\Filters\Scopes;

use App\Domain\Filters\FilterQuery;
use Illuminate\Database\Eloquent\Builder;

class ServiceScope implements FilterQuery
{
    public function apply(Builder $builder, string|array $services): Builder
    {
        if (is_string($services)) {
            return $builder->where('attendances.service_id', $services);
        }

        return $builder->whereIn('attendances.service_id', $services);
    }
}
