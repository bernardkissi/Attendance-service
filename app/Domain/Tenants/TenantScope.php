<?php

declare(strict_types=1);

namespace App\Domain\Tenants;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Scope;

class TenantScope implements Scope
{
    public function __construct(public Model $branch)
    {
        // initialized
    }

    // Apply the scope to a given Eloquent query builder.
    public function apply(Builder $builder, Model $model): void
    {
        $builder->where("branches.{$this->branch->getForeignKey()}", '=', $this->branch->id);
    }
}
