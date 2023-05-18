<?php

declare(strict_types=1);

namespace App\Domain\Tenants;

use Illuminate\Database\Eloquent\Model;

class TenantManager
{
    protected $tenant;

    public function setTenant(Model $tenant): void
    {
        $this->tenant = $tenant;
    }

    public function getTenant(): Model
    {
        return $this->tenant;
    }

    public function getTenantConfig(): Model
    {
        return $this->tenant['configuration'];
    }
}
