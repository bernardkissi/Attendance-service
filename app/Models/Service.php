<?php

namespace App\Models;

use App\Domain\Qrcodes\Traits\HasAttendees;
use App\Domain\Qrcodes\Traits\isManageable;
use App\Domain\Tenants\Tenantable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Laravel\Scout\Searchable;

class Service extends Model
{
    use HasFactory,
        isManageable,
        HasAttendees,
        Searchable,
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

    public function groups()
    {
        return $this->morphedByMany(Group::class, 'serviceable');
    }

    public function tags()
    {
        return $this->morphedByMany(Tag::class, 'serviceable');
    }

    public function attendances(): HasMany
    {
        return $this->hasMany(Attendance::class);
    }

    public function searchableAs(): string
    {
        return 'services_index';
    }

    public function toSearchableArray(): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
        ];
    }
}
