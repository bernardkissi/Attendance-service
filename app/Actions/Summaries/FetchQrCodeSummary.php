<?php

declare(strict_types=1);

namespace App\Actions\Summaries;

use App\Actions\Action;
use App\Domain\Summaries\QrcodeSummary;
use App\Models\Qrcode;
use Illuminate\Support\Collection;

class FetchQrCodeSummary implements Action
{
    public function get(Qrcode $qrcode): Collection
    {
        $summarizer = new QrcodeSummary($qrcode);

        return $summarizer->summarize();
    }

    public function all(): Collection
    {
        $summarizer = new QrcodeSummary();

        return $summarizer->summarize();
    }
}
