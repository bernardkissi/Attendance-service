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
        public readonly string $verficationtype,
        public readonly array $memberLocation = []
    ) {
    }

    public static function fromRequest(Request $request): static
    {
        $serviceQrcode = static::resolveServiceQrcode($request->serviceCodeUuid);
        $member = static::resolveMember($request->verificationType, $request->verifyingForMemberUuid);

        return new static(
            $serviceQrcode,
            $member,
            $request->verificationType,
            $request->memberLocation
        );
    }

    private static function resolveMember(string $verficationtype, string $verifyingForMemberWithUuid): Member
    {
        return match ($verficationtype) {
            'service_verfication' => request()->member,
            'member_verification' => Member::whereUuid($verifyingForMemberWithUuid)->first(),
        };
    }

    private static function resolveServiceQrcode(string $serviceCodeUuid): ServiceQrcode
    {
        return ServiceQrcode::whereUuid($serviceCodeUuid)->first();
    }
}
