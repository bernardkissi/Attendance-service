<?php

declare(strict_types=1);

namespace App\Domain\Qrcodes\Generators\pdf;

use App\Domain\Qrcodes\PdfGenerator;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Response;
use SimpleSoftwareIO\QrCode\Facades\QrCode;

class PdfQrcodeGenerator implements PdfGenerator
{
    public function generate(Model $model): Response
    {
        $url = QrCode::format('png')
            ->size(700)
            ->generate($model->identifier);

        $filename = now()->format('Y-m-d_H-i-s').'_qrcode-1.pdf';

        $pdf = Pdf::loadView('pdf', compact('url', 'model'));

        return $pdf->stream($filename);
    }
}
