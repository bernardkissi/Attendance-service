<?php

declare(strict_types=1);

namespace App\DTOs;

use Illuminate\Http\Request;
use Jenssegers\Agent\Agent;

class AttendanceDTO
{
    public function __construct(
        public readonly int $qrcodeId,
        public readonly int $branchId,
        public readonly int $memberId,
        public readonly int $serviceId,
        public readonly string $device,
        public readonly string $userAgent,
        public readonly string $ip_address,
        public readonly ?int $visitorBranchId = null,
        public readonly ?array $location = null,
        public readonly ?int $recordedByUserId = null,
    ) {
    }

    public static function fromRequest(Request $request): static
    {
        $device = (new Agent([$request->userAgent()]))->deviceType();
        $isAVisitor = $request->member->branch_id !== $request->qrcode->branch_id;

        return new static(
            $request->qrcode->id,
            $request->qrcode->branch_id,
            $request->qrcode->service_id,
            $request->member->id,
            $device,
            $request->userAgent(),
            $request->ip(),
            $isAVisitor ? $request->member->branch_id : null,
            $request->location,
        );
    }

    public function toArray(): array
    {
        return [
            'qrcode_id' => $this->qrcodeId,
            'branch_id' => $this->branchId,
            'service_id' => $this->serviceId,
            'member_id' => $this->memberId,
            'visitor_branch_id' => $this->visitorBranchId,
            'device' => $this->device,
            'user_agent' => $this->userAgent,
            'ip_Address' => $this->ip_address,
            'location' => $this->location,
            'recorded_at' => now(),
            'recorded_by_user_id' => $this->recordedByUserId,
        ];
    }
}
