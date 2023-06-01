<?php

declare(strict_types=1);

namespace App\Domain\Qrcodes\Generators\qrcode;

use App\Domain\Qrcodes\QrcodeGenerator;
use Illuminate\Database\Eloquent\Model;

class MemberQrcodeGenerator implements QrcodeGenerator
{
    public function generate(Model $model): void
    {
        //
    }
}
