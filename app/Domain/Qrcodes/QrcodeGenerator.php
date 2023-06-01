<?php

declare(strict_types=1);

namespace App\Domain\Qrcodes;

use Illuminate\Database\Eloquent\Model;

interface QrcodeGenerator
{
    public function generate(Model $model): void;
}
