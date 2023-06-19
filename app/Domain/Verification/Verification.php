<?php

namespace App\Domain\Verification;

use App\Domain\Verification\Checks\Result;
use Illuminate\Support\Collection;

interface Verification
{
    /**
     * Return all results.
     *
     * @return Collection<Result>
     */
    public function runChecks(): Collection;
}
