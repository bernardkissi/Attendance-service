<?php

namespace App\Actions;

use App\Models\Qrcode;
use Illuminate\Http\Response;

class GenerateServiceQrcodePdf implements Action
{
    public function __construct(
        public Qrcode $qrcode
    ) {
    }

    public function exec(): Response
    {
        return app(PdfGenerator::class)->generate($this->qrcode);
    }
}
