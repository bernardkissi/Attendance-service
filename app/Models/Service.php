<?php

namespace App\Models;

use App\Domain\Tenants\Tenantable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Service extends Model
{
    use HasFactory, Tenantable;

    protected $guarded = [];

    public function qrcodes(): HasMany
    {
        return $this->hasMany(Qrcode::class);
    }
}
