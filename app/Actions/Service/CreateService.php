<?php

declare(strict_types=1);

namespace App\Actions\Service;

use App\Actions\Action;
use App\DTOs\NonExpirableServiceDTO;
use App\DTOs\OneTimeServiceDTO;
use App\DTOs\RecurringServiceDTO;
use App\Models\Service;
use Exception;

class CreateService implements Action
{
    public function __construct(
        public OneTimeServiceDTO|RecurringServiceDTO|NonExpirableServiceDTO $serviceDTO
    ) {
    }

    public function exec(): bool
    {
        $service = Service::create($this->serviceDTO->toArray());

        if ($service) {
            return true;
        }

        throw new Exception('service creation failed');
    }
}
