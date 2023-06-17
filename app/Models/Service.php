<?php

namespace App\Models;

use App\Domain\Qrcodes\Traits\isManageable;
use App\Domain\Tenants\Tenantable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Service extends Model
{
    use HasFactory,
        isManageable,
        Tenantable;

    protected $guarded = [];

    protected $casts = [
        'expirable' => 'bool',
        'recurring' => 'bool',
    ];

    public function qrcodes(): HasMany
    {
        return $this->hasMany(Qrcode::class);
    }

    public function branch(): BelongsTo
    {
        return $this->belongsTo(Branch::class);
    }
}
