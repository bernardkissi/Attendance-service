<?php

namespace App\Domain\Verification\Service;

interface Verification
{
    public function check(): bool;
}
