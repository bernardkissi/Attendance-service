<?php

declare(strict_types=1);

namespace App\DTOs;

use App\Models\Service;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;

final class NonExpirableServiceDTO
{
    public function __construct(
        public readonly string $name,
        public readonly string $type,
        public readonly string $start_time,
        public readonly string $end_time,
        public readonly int $recurring,
        public readonly string $recurring_day,
        public readonly ?int $user_id = null
    ) {
    }

    public static function fromRequest(Request $request): static
    {
        return new self(
            $request->name,
            $request->type,
            $request->start_time,
            $request->end_time,
            $request->recurring,
            $request->recurring_day,
            $request->user() ? $request->user()->id : null
        );
    }

    public function toArray(): array
    {
        return [
            'name' => $this->name,
            'type' => $this->type,
            'start_time' => $this->start_time,
            'end_time' => $this->end_time,
            'recurring' => $this->recurring,
            'recurring_day' => $this->recurring_day,
            'user_id' => $this->user_id,
        ];
    }
}
