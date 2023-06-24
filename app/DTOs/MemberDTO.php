<?php

declare(strict_types=1);

namespace App\DTOs;

use Illuminate\Http\Request;

final class MemberDTO
{
    public function __construct(
        public readonly string $name,
        public readonly ?string $email,
        public readonly string $phone,
        public readonly int $pin,
        public readonly string $memberId,
        public readonly int $branchId
    ) {

    }

    public static function fromRequest(Request $request): static
    {
        return new self(
            $request->name,
            $request->email,
            $request->phone,
            isset($request->pin) ? $request->pin : rand(1000, 5000), // MemberGenerator::generatePin()
            isset($request->memberId) ? $request->memberId : (string) rand(10000, 50000), // MemberGenerator::generateId()
            isset($request->branch_id) ? $request->branch_id : $request->user()->branch_id,
        );
    }

    public function toArray(): array
    {
        return [
            'name' => $this->name,
            'phone' => $this->phone,
            'pin' => $this->pin,
            'memberId' => $this->memberId,
            'branch_id' => $this->branchId,
        ];
    }
}
