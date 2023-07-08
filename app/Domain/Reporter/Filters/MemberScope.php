<?php

declare(strict_types=1);

namespace App\Domain\Reporter\Filters;

use App\Domain\Reporter\FilterQuery;
use Illuminate\Database\Eloquent\Builder;

class MemberScope implements FilterQuery
{
    public function apply(Builder $builder, string|array $members): Builder
    {
        if (is_string($members)) {
            return $builder->whereMemberId($members);
        }

        return $builder->whereIn('member_id', $members);
    }
}
