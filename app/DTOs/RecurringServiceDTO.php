<?php

declare(strict_types=1);

namespace App\DTOs;

use Illuminate\Http\Request;

final class RecurringServiceDTO
{
    public function __construct(
        public readonly string $name,
        public readonly string $type,
        public readonly string $start_time,
        public readonly string $end_time,
        public readonly string $commence_date,
        public readonly string $end_date,
        public readonly int $expirable,
        public readonly int $recurring,
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
            $request->commence_date,
            $request->end_date,
            $request->expirable,
            $request->recurring,
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
            'commence_date' => $this->commence_date,
            'end_date' => $this->end_date,
            'expirable' => $this->expirable,
            'recurring' => $this->recurring,
            'user_id' => $this->user_id,
        ];
    }
}
