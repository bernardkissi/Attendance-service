<?php

declare(strict_types=1);

namespace App\DTOs;

use Illuminate\Http\Request;

class AuthDTO
{
    public function __construct(
        private readonly string $username,
        private readonly string $password
    ) {
    }

    public static function fromRequest(Request $request): self
    {
        return new self(
            $request->get('username'),
            $request->get('password')
        );
    }

    public function toArray()
    {
        return [
            'username' => $this->username,
            'password' => $this->password,
        ];
    }
}
