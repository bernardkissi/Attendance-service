<?php

namespace App\Domain\Reporter;

use Illuminate\Database\Eloquent\Builder;

interface FilterQuery
{
    public function apply(Builder $builder, string|array $value): Builder;
}
