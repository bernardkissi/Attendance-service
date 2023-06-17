<?php

namespace App\Domain\Verification;

interface Verification
{
    public function runChecks(): bool;
}
