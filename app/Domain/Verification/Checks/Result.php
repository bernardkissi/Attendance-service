<?php

declare(strict_types=1);

namespace App\Domain\Verification\Checks;

class Result
{
    public function __construct(
        public bool $status,
        public ?string $reason = null
    ) {
    }
}
