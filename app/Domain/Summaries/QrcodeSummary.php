<?php

declare(strict_types=1);

namespace App\Domain\Summaries;

use App\Models\Attendance;
use App\Models\Qrcode;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;

class QrcodeSummary implements Statistics
{
    public function __construct(
        public Qrcode $qrcode
    ) {

    }

    public function summarize(): Collection
    {
        return $this->buildQuery()->get();
    }

    private function buildQuery(): Builder
    {
        return Attendance::query()
            ->select(DB::raw('COUNT(attendances.member_id) AS total_attendance'))
            ->selectRaw('GROUP_CONCAT(members.name) AS members')
            ->selectRaw('GROUP_CONCAT(members.id) AS member_ids')
            ->selectRaw('MAX(qrcodes.is_a_joint_service) AS expected_attendees')
            ->selectRaw('MAX(qrcodes.is_a_joint_service) - COUNT(member_id) AS absentees_per_service')
            ->join('members', 'members.id', '=', 'attendances.member_id')
            ->join('qrcodes', 'qrcodes.id', '=', 'attendances.qrcode_id')
            ->where('attendances.qrcode_id', '=', $this->qrcode->id)
            ->groupBy('attendances.service_id');
    }
}
