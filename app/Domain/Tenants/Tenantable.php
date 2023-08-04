<?php

declare(strict_types=1);

namespace App\Domain\Tenants;

use Illuminate\Database\Eloquent\Model;

trait Tenantable
{
    public static function bootTenantable()
    {
        $tenant = app(TenantManager::class);

        //apply scope if user is not a super admin
        if (auth()->check() && auth()->user()->super_admin === false) {
            static::addGlobalScope(new TenantScope($tenant->getTenant()));
        }

        //assign tenant's branch if not set already
        static::creating(function (Model $model) use ($tenant) {
            if (! isset($model->branch_id)) {
                $model->branch_id = $tenant->getTenant()->id;
            }
        });
    }
}
