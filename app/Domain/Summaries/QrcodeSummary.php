<?php

declare(strict_types=1);

namespace App\Domain\Summaries;

use App\DTOs\FilterQueryDTO;
use App\Models\Attendance;
use App\Models\Qrcode;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;

class QrcodeSummary implements Statistics
{
    public function __construct(
        public ?Qrcode $qrcode = null
    ) {
    }

    public function summarize(FilterQueryDTO $filters = null): Collection
    {
        $results = $this->buildQuery($filters)->get();

        return $this->transform($results);
    }

    public function buildQuery(FilterQueryDTO $filters = null): Builder
    {
        return Attendance::query()
            ->select(DB::raw('COUNT(attendances.member_id) AS total_attendance, qrcodes.identifier AS identifier'))
            ->selectRaw('GROUP_CONCAT(CONCAT_WS("<",members.name, attendances.recorded_at, members.id, members.identifier, attendances.device)) AS members')
            ->selectRaw('GROUP_CONCAT(members.id) AS member_ids')
            ->selectRaw('MAX(qrcodes.expected_attendees) AS expected_attendees')
            ->selectRaw('MAX(qrcodes.expected_attendees) - COUNT(member_id) AS absentees_per_service')
            ->join('members', 'members.id', '=', 'attendances.member_id')
            ->join('qrcodes', 'qrcodes.id', '=', 'attendances.qrcode_id')
            ->when($this->qrcode, function ($query) {
                $query->where('attendances.qrcode_id', '=', $this->qrcode->id);
            })
            ->groupBy('attendances.service_id', 'identifier');
    }

    private function transform(Collection $collection): Collection
    {
        return $collection->map(function ($summary) {
            return [
                'total_attendances' => $summary->total_attendance,
                'expected_attendees' => $summary->expected_attendees,
                'total_absentees' => $summary->expected_attendees - $summary->total_attendance,
                'qrcode_identifier' => $summary->identifier,
                'members' => collect(explode(',', $summary->members))
                    ->map(fn (string $member) => $this->parseDetails($member)),
            ];
        });
    }

    private function parseDetails(string $member): array
    {
        $keys = ['name', 'recorded_at', 'member_id', 'member_identifier', 'device'];

        return collect(explode('<', $member))
            ->flatMap(fn (string $member, $key) => [$keys[$key] => $member])->toArray();
    }
}
