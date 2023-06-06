<?php

declare(strict_types=1);

namespace App\Domain\Verification\Checks;

use App\DTOs\VerificationDTO;

abstract class Checker
{
    abstract public function verify(VerificationDTO $dto): bool;
}
