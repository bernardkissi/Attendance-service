<?php

declare(strict_types=1);

namespace App\Actions\Qrcode;

use App\Actions\Action;
use App\DTOs\ServiceQrcodeDTO;
use App\Models\Qrcode;

class ManageServiceQrcode implements Action
{
    public static function modify(Qrcode $qrcode, ServiceQrcodeDTO $serviceDto): bool
    {
        return $qrcode->updateOrFail($serviceDto->toArray());
    }

    public static function remove(Qrcode $qrcode): bool
    {
        return $qrcode->deleteOrFail();
    }
}
