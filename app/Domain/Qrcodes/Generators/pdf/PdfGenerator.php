<?php

declare(strict_types=1);

namespace App\Domain\Qrcodes\Generators\pdf;

use Illuminate\Http\Response;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Database\Eloquent\Model;
use SimpleSoftwareIO\QrCode\Facades\QrCode;
use App\Domain\Qrcodes\PdfGeneratorContract;

class PdfGenerator implements PdfGeneratorContract
{
    public function generate(Model $model): Response
    {
        $url = QrCode::format('png')
            ->size(700)
            ->generate($model->name);

        $filename = now()->format('Y-m-d_H-i-s') . '_qrcode-1.pdf';

        $pdf = Pdf::loadView('pdf', compact('url'));
        return $pdf->stream($filename);
    }
}
