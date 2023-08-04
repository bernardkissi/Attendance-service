<?php

declare(strict_types=1);

namespace App\Domain\Statistics;

use App\Domain\Filters\Scopes\DateScope;
use App\Domain\Filters\Scopes\MemberScope;
use App\Domain\Filters\Scopes\MonthScope;
use App\Domain\Filters\Scopes\ServiceScope;
use App\Domain\Filters\Scopes\YearScope;
use App\DTOs\FilterQueryDTO;
use App\Models\Attendance;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Collection;

class AttendanceSummary implements Statistics
{
    protected array $scopes = [];

    protected array $filters = [];

    public function __construct(array $filters = [])
    {
        $this->scopes = [
            'year' => new YearScope(),
            'month' => new MonthScope(),
            'members' => new MemberScope(),
            'date' => new DateScope(),
            'service' => new ServiceScope(),
        ];

        $this->filters = $filters;
    }

    public function summarize(FilterQueryDTO $filter): Collection
    {
        return $this->buildQuery($filter)->get();
    }

    private function buildQuery(FilterQueryDTO $filter): Builder
    {
        return Attendance::query()
            ->withFilter($this->scopes)

            /**
             * Attendances count query.
             */
            ->when($filter->groupBy === 'year', function (Builder $query) {
                $query->selectRaw('YEAR(recorded_at) AS year, services.name AS service');
            }, fn (Builder $query) => $query->selectRaw('YEAR(recorded_at) AS year, MONTHNAME(recorded_at) AS month, services.name AS service'))

            ->selectRaw('COUNT(member_id) AS attendance')
            ->selectRaw('COUNT(DISTINCT qrcode_id) AS service_occurences_per_month')
            ->join('services', 'services.id', '=', 'attendances.service_id')
            /**
             * Absentees count query
             */
            ->when($filter->filter === 'absentees', function ($query) {
                $query->selectRaw('MAX(qrcodes.is_a_joint_service) AS expected_attendees_per_each_service')
                    ->selectRaw('(COUNT(DISTINCT qrcode_id) * MAX(qrcodes.is_a_joint_service)) AS expected_attendance_per_month')
                    ->selectRaw('(COUNT(DISTINCT qrcode_id) * MAX(qrcodes.is_a_joint_service)) - COUNT(member_id) AS absentees_per_month')
                    ->join('qrcodes', 'qrcodes.id', '=', 'attendances.qrcode_id');
            })

            /**
             *  Gender count query
             */
            ->when($filter->filter === 'gender', function ($query) {
                $query->selectRaw('CAST(SUM(CASE WHEN members.sex = "M" THEN 1 ELSE 0 END) AS SIGNED) AS male_count')
                    ->selectRaw('CAST(SUM(CASE WHEN members.sex = "F" THEN 1 ELSE 0 END) AS SIGNED) AS female_count')
                    ->join('members', 'members.id', '=', 'attendances.member_id');
            })

            // Grouping query
            ->when($filter->groupBy === 'year', function ($query) {
                $query->groupBy('year', 'service');
            }, fn (Builder $query) => $query->groupBy('year', 'month', 'service'));

    }
}
