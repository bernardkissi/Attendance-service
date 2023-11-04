<?php

declare(strict_types=1);

namespace App\Domain\Summaries;

use App\DTOs\FilterQueryDTO;
use App\Models\Member;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Collection;

class MemberSummary implements Statistics
{
    public function __construct(
        public ?Member $member = null
    ) {
    }

    public function summarize(FilterQueryDTO $filters = null): Collection
    {
        $results = $this->buildQuery($filters)->get();

        return $this->transform($results);
    }

    public function buildQuery(FilterQueryDTO $filters = null): Builder
    {
        return Member::query()
            ->select('members.id AS member_id', 'members.name AS member_name', 'members.identifier AS identifier', 'services.name AS service_name')
            ->selectRaw('COUNT(DISTINCT qrcodes.id) AS service_count')
            ->selectRaw('COUNT(DISTINCT attendances.id) AS total_attendance')
            ->join('attendances', 'members.id', '=', 'attendances.member_id')
            ->join('services', 'attendances.service_id', '=', 'services.id')
            ->Join('qrcodes', 'services.id', '=', 'qrcodes.service_id')
            ->when($this->member, function ($query) {
                $query->whereKey($this->member->id);
            })
            ->groupBy('members.id', 'members.name', 'members.identifier', 'services.name');
    }

    private function transform(Collection $collection): Collection
    {
        return $collection->map(function ($member) {
            return [
                'id' => $member->member_id,
                'name' => $member->member_name,
                'identifier' => $member->identifier,
                'service' => $member->service_name,
                'total_attendance' => $member->total_attendance,
                'service_occurence_count' => $member->service_count,
                'absent_count' => $member->service_count - $member->total_attendance,
            ];
        })->groupBy(['identifier']);
    }
}
