<?php

declare(strict_types=1);

namespace App\Domain\Reporter;

use App\Domain\Filters\Scopes\DateScope;
use App\Domain\Filters\Scopes\MemberScope;
use App\Domain\Filters\Scopes\MonthScope;
use App\Domain\Filters\Scopes\ServiceScope;
use App\Domain\Filters\Scopes\YearScope;
use App\Models\Attendance;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Collection;

abstract class Reporter
{
    protected array $scopes;

    public function __construct()
    {
        $this->scopes = [
            'year' => new YearScope(),
            'month' => new MonthScope(),
            'members' => new MemberScope(),
            'date' => new DateScope(),
            'service' => new ServiceScope(),
        ];
    }

    abstract public function report(): Collection;

    protected function getAttendanceData(Collection $report, array $group): Collection
    {
        return $report->map(function (Attendance $attendance) {
            return [
                'service' => $attendance->service,
                'year' => $attendance->year,
                'month' => $attendance->month,
                'members' => collect(array_count_values(collect(explode(',', $attendance->member_ids))
                    ->toArray()))
                    ->map(fn (int $count, string $memberId) => ['name' => $memberId, 'attendance_count' => $count])
                    ->values(),
                'attendance_count' => $attendance->attendance,
                'service_occurences_per_month' => $attendance->service_occurences_per_month,
                'expected_attendance_per_each_service' => $attendance->expected_attendees_per_each_service,
                'expected_attendance_per_month' => $attendance->expected_attendance_per_month,
                'absentees_per_month' => $attendance->absentees_per_month,
                'gender_counts' => ['male' => $attendance->male_count, 'female' => $attendance->female_count],
            ];
        })->groupBy($group);
    }

    protected function defaultQuery(): Builder
    {
        return Attendance::query()
            ->withFilter($this->scopes)
            ->selectRaw('YEAR(recorded_at) AS year, MONTHNAME(recorded_at) AS month, services.name AS service')
            ->selectRaw('COUNT(member_id) AS attendance')
            ->selectRaw('COUNT(DISTINCT qrcode_id) AS service_occurences_per_month')
            ->selectRaw('MAX(qrcodes.expected_attendees) AS expected_attendees_per_each_service')
            ->selectRaw('CAST(SUM(CASE WHEN members.sex = "M" THEN 1 ELSE 0 END) AS SIGNED) AS male_count')
            ->selectRaw('CAST(SUM(CASE WHEN members.sex = "F" THEN 1 ELSE 0 END) AS SIGNED) AS female_count')
            ->selectRaw('(COUNT(DISTINCT qrcode_id) * MAX(qrcodes.expected_attendees)) AS expected_attendance_per_month')
            ->selectRaw('(COUNT(DISTINCT qrcode_id) * MAX(qrcodes.expected_attendees)) - COUNT(member_id) AS absentees_per_month')
            ->selectRaw('GROUP_CONCAT(members.name) AS member_ids')
            ->leftJoin('members', 'members.id', '=', 'attendances.member_id')
            ->join('qrcodes', 'qrcodes.id', '=', 'attendances.qrcode_id')
            ->join('services', 'services.id', '=', 'attendances.service_id')
            ->groupBy('year', 'month', 'service');
    }
}
