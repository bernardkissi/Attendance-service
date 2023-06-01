 <!-- // $qrcode = Qrcode::create([
            //     'identifier' => Str::uuid()->toString(),
            //     'service_id' => $qrcodeData->serviceId,
            //     'expires_at' => $qrcodeData->endTime,
            //     'service_date' => $qrcodeData->serviceDate,
            //     'location' => $qrcodeData->location,
            //     'distance_threshold' => $qrcodeData->distanceThreshold,
            //     'verifiers' => $qrcodeData->verifiers
            // ]); -->


<!-- <?php

declare(strict_type=1);

namespace App\Domain\Qrcodes\DTOs;

use Carbon\Carbon;
use App\Models\Service;
use Carbon\CarbonImmutable;
use App\Models\Configuration;

class ServiceDto
{
    public function __construct(
        public readonly int $serviceId,
        public readonly string  $startTime,
        public readonly string  $endTime,
        public readonly CarbonImmutable $serviceDate,
        public readonly array $location,
        public readonly float $distanceThreshold,
        public readonly array $verifiers
    ) {
    }


    public static function extractServiceData(Configuration $config, Service $service, Carbon $date): static
    {
        return new static(
            $service->id,
            $service->start_time,
            $service->end_time,
            new CarbonImmutable($date),
            $config->options->location,
            $config->distance_threshold,
            $config->verifiers
        );
    }
} -->


<!-- <?php

declare(strict_type=1);

namespace App\Domain\Qrcodes\DTOs;

use App\Models\Service;
use Carbon\CarbonImmutable;
use App\Models\Configuration;

class MemberDto
{
    public function __construct(
        public readonly Service $service,
        public readonly string  $startTime,
        public readonly string  $endTime,
        public readonly CarbonImmutable $serviceDate,
        public readonly array $location,
        public readonly float $distanceThreshold,
        public readonly array $verifiers
    ) {
    }


    public static function extractServiceData(Configuration $config, Service $service, CarbonImmutable $date): static
    {
        return new static(
            $service,
            $service->start_time,
            $service->end_time,
            $date,
            $config->options->location,
            $config->distance_threshold,
            $config->verifiers
        );
    }
} -->


<!-- 
declare(strict_types=1);

namespace App\Domain\Qrcodes\Generators\pdf;

use Illuminate\Http\Response;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use SimpleSoftwareIO\QrCode\Facades\QrCode;
use App\Domain\Qrcodes\PdfGeneratorContract;

class PdfGenerator implements PdfGeneratorContract
{
    public function generate(Model $model): Response
    {
        $url = QrCode::format('png')
            ->size(700)
            // ->mergeString(Storage::get(config('qrcode.church_logo')), .4)
            ->generate($model->name);

        $filename = now()->format('Y-m-d_H-i-s') . '_qrcode-1.pdf';

        $pdf = Pdf::loadView('pdf', compact('url'));
        return $pdf->stream($filename);
    }
} -->

<!-- 
  public static function booted(): void
    {
        static::creating(function ($model) {
            if (!isset($model->options)) {
                $model->options = [
                    'location' => [
                        'latitude' => null,
                        'longitude' => null,
                    ],
                    'distance_threshold' => null,
                    'verifiers' => [
                        'location' => true,
                        'time' => true,
                        'membership' => true,
                    ],
                    'generate_report' => 'monthly',
                    'generate_qrcode' => 'manually',
                    'verification_type' => 'qrcode',
                ];
            }
        });
    } -->



//TODO: 1. All services that have the start date passed will be rejected when creating qrcodes
//TODO: 2. Check if time has elapsed for a for non-expirable services
//TODO: throw proper exception to handle expired qrcode 
