<?php

declare(strict_types=1);

namespace App\DTOs;

use App\Models\Member;
use App\Models\Qrcode as ServiceQrcode;
use Illuminate\Http\Request;

class VerificationDTO
{
    public function __construct(
        public readonly ServiceQrcode $qrcode,
        public readonly Member $member,
        public readonly string $verificationType,
        public readonly array $memberLocation = []
    ) {
    }

    public static function fromRequest(Request $request): static
    {
        $qrcode = static::resolveServiceQrcode($request->qrcodeIdentifier);

        $member = match (true) {
            isset($request->verifiyingForMemberWithIdentifier) => static::resolveMember($request->verificationType, $request->verifiyingForMemberWithIdentifier),
            default => static::resolveMember($request->verificationType)
        };

        return new static(
            $qrcode,
            $member,
            $request->verificationType,
            $request->location
        );
    }

    private static function resolveMember(string $verficationtype, ?string $verifyingForMemberWithIdentifier = null): Member
    {
        return match ($verficationtype) {
            'service_verification' => request()->member,
            'member_verification' => Member::whereIdentifier($verifyingForMemberWithIdentifier)->first(),
        };
    }

    private static function resolveServiceQrcode(string $serviceCodeIdentifier): ServiceQrcode
    {
        return ServiceQrcode::whereIdentifier($serviceCodeIdentifier)->first();
    }

    public function toArray(): array
    {
        return [
            'qrcode' => $this->qrcode->identifier,
            'member' => $this->member->id,
            'verification_type' => $this->verificationType,
            'location' => $this->memberLocation,
        ];
    }
}
