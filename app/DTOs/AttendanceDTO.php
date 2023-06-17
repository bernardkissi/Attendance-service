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
        public readonly string $device,
        public readonly string $userAgent,
        public readonly string $ip_address,
        public readonly ?array $location = null,
        public readonly ?int $recorded_by_userId = null,
    ) {
    }

    public static function fromRequest(Request $request): static
    {
        $device = (new Agent([$request->userAgent()]))->deviceType();

        return new static(
            $request->qrcode->id,
            $request->qrcode->branch_id,
            $request->member->id,
            $device,
            $request->userAgent(),
            $request->ip(),
            $request->location,
        );
    }

    public function toArray(): array
    {
        return [
            'qrcode_id' => $this->qrcodeId,
            'branch_id' => $this->branchId,
            'member_id' => $this->memberId,
            'device' => $this->device,
            'user_agent' => $this->userAgent,
            'ip_Address' => $this->ip_address,
            'location' => $this->location,
            'recorded_at' => now(),
            'recorded_by_user_id' => $this->recorded_by_userId,
        ];
    }
}

// allow other members when joint is enabled
