<?php

declare(strict_types=1);

namespace App\Actions\Service;

use App\Actions\Action;
use App\Actions\Qrcode\CreateServiceQrcode;
use App\DTOs\NonExpirableServiceDTO;
use App\DTOs\OneTimeServiceDTO;
use App\DTOs\RecurringServiceDTO;
use App\DTOs\ServiceQrcodeDTO;
use App\Models\Service;

class ManageService implements Action
{
    public static function modify(
        Service $service,
        NonExpirableServiceDTO|OneTimeServiceDTO|RecurringServiceDTO $dto
    ): void {

        // checks if any of the service qrcodes is currently running
        // if any is currently running we cant contiune with the update.
        if ($service->qrcodes->isCurrentlyRunning()->count() > 0) {
            throw new \Exception('Service cannot be updated because it is currently running');
        }

        // update the service
        $service->update($dto->toArray());

        // check if the service day, date and time were updated
        if ($service->wasChanged(['start_time', 'end_time', 'commence_date', 'end_date', 'recurring_day'])) {
            // apply service update to related qrcodes
            match ($service->type) {
                'non-expirable-service', 'one-time-service' => static::updateSingleServiceQrcodes($service),
                'recurring-service' => static::updateRecurringServiceQrcodes($service),
                default => throw new \InvalidArgumentException('The service type is not supported')
            };
        }
    }

    public static function remove(Service $service): bool
    {
        return $service->deleteOrFail();
    }

    private static function updateSingleServiceQrcodes(Service $service): void
    {
        // directly extract the qrcode and update time, and date details
        $serviceQrCodeDTO = ServiceQrcodeDTO::fromModel($service);
        // apply patches to the qrcode(s)
        $qrcode = $service->qrcodes()->isValid()->first();

        $qrcode ?
            $qrcode->update($serviceQrCodeDTO->toArray()) :
            CreateServiceQRCode::create($serviceQrCodeDTO);
    }

    private static function updateRecurringServiceQrcodes(Service $service): void
    {
        //recurring type
        $serviceQrCodeDTO = ServiceQrcodeDTO::fromModel($service);
        // check if any the qrcodes is already within the service dates range
        $activeQrcodes = $service->qrcodes()?->isWithinServiceDate($service->commence_date, $service->end_date);
        // Action: Soft deletes the qrcode
        $inactiveQrcodes = $service->qrcodes()?->isNotWithinServiceDate($service->commence_date, $service->end_date);

        if ($inactiveQrcodes) {
            $inactiveQrcodes->toQuery()->update(['expired_on' => now()]);
        }
        // generate the service dates
        $dates = $serviceQrCodeDTO->service_date;
        // filter out the active qrcodes dates remaining the dates with no qrcodes
        $qrcodesDates = $activeQrcodes ? $activeQrcodes->pluck('service_date') : [];
        // only udpate timestamp if the active qrcodes
        $missingQrcodeDates = collect($dates)->diff($qrcodesDates);
        // generate qrcodes for missing dates
        $serviceQrCodeDTO->service_date = $missingQrcodeDates;

        CreateServiceQRCode::create($serviceQrCodeDTO);
    }
}
