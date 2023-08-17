<?php

declare(strict_types=1);

namespace App\DTOs;

readonly class SearchResultDTO implements DataTransferObject
{
    public function __construct(
        public int|string $id,
        public string $name
    ) {
    }
}
