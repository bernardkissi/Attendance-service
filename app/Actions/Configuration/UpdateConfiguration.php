<?php

declare(strict_types=1);

namespace App\Actions\Configuration;

use App\Actions\Action;
use App\Domain\Tenants\TenantManager;
use App\DTOs\ConfigurationDTO;

class UpdateConfiguration implements Action
{
    public static function update(ConfigurationDTO $dto): bool
    {
        $config = app(TenantManager::class);
        $configuration = $config->getTenantConfig();
        // get the existing configuration and update
        if ($dto->hasChanged($configuration)) {
            return false; // throw an exceeption
        }

        $configuration->update(['options' => $dto->toArray()]);

        return true;
    }
}
