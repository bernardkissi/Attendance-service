<?php

declare(strict_types=1);

namespace App\Domain\Reporter;

use App\DTOs\FilterQueryDTO;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Arr;

class ReportGenerator
{
    public function __construct(
        public FilterQueryDTO $filterDTO
    ) {
    }

    public function apply(Builder $builder, array $scopes): Builder
    {
        foreach ($this->limitscopes($scopes) as $key => $scope) {
            if (! $scope instanceof FilterQuery) {
                continue;
            }

            $scope->apply($builder, $this->filterDTO->{$key});
        }

        return $builder;
    }

    protected function limitscopes(array $scopes): array
    {
        return Arr::only($scopes, array_keys($this->filterDTO->toArray()));
    }
}
