<?php

declare(strict_types=1);

namespace App\DTOs;

use Illuminate\Http\Request;

readonly class FilterQueryDTO
{
    public function __construct(
        public string $year,
        public string|array|null $month,
        public string|array|null $dateRange,
        public string|array|null $service,
        public string|array|null $members,
        public ?string $filter,
        public ?string $groupBy,

    ) {
    }

    public static function fromRequest(Request $request): self
    {
        return new static(
            $request->missing('year') ? now()->format('Y') : $request->query('year'),
            $request->missing('month') ? null : static::formatQuery($request->query('month')),
            $request->missing('date') ? null : static::formatQuery($request->query('date')),
            $request->missing('service') ? null : static::formatQuery($request->query('service')),
            $request->missing('members') ? null : static::formatQuery($request->query('members')),
            $request->missing('filter') ? null : static::formatQuery($request->query('filter')),
            $request->missing('groupBy') ? null : static::formatQuery($request->query('groupBy')),
        );
    }

    private static function formatQuery(string $str): string|array
    {
        $array = explode(',', $str);
        $array = array_map('trim', $array);

        if (count($array) === 1) {
            return $array[0];
        }

        return $array;
    }

    public function toArray(): array
    {
        $queryValues = [
            'year' => $this->year,
            'month' => $this->month,
            'date' => $this->dateRange,
            'service' => $this->service,
            'members' => $this->members,
        ];

        return collect($queryValues)->filter(fn ($value) => $value !== null)->toArray();
    }
}
