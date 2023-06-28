<?php

declare(strict_types=1);

namespace App\DTOs;

use Illuminate\Http\Request;

class UserDTO
{
    public function __construct(
        public readonly int $branch_id,
        public readonly string $name,
        public readonly string $email,
        public readonly ?string $password,
        public readonly int $pin,
        public readonly int $role_id = 0,
    ) {
    }

    public static function fromRequest(Request $request): self
    {
        return new self(
            $request->branch_id,
            $request->name,
            $request->email,
            $request->password,
            isset($request->pin) ? $request->pin : rand(1000, 5000),
            $request->role_id,
        );
    }

    public static function fromModificationRequest(Request $request): self
    {
        return new self(
            $request->branch_id,
            $request->name,
            $request->email,
            null,
            $request->pin,
            $request->role_id,
        );
    }

    public function toArray(): array
    {
        return [
            'branch_id' => $this->branch_id,
            'name' => $this->name,
            'email' => $this->email,
            'password' => $this->password,
            'pin' => $this->pin,
            'role_id' => $this->role_id,
        ];
    }
}
