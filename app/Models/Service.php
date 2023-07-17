<?php

namespace App\Models;

use App\Models\Qrcode;
use App\Domain\Tenants\Tenantable;
use Illuminate\Support\Collection;
use Illuminate\Database\Query\Builder;
use Illuminate\Database\Eloquent\Model;
use App\Domain\Qrcodes\Traits\isManageable;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\MorphTo;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

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

    public function groups()
    {
        return $this->morphedByMany(Group::class, 'serviceable');
    }

    public function tags()
    {
        return $this->morphedByMany(Tag::class, 'serviceable');
    }

    public function getEligibleAttendeesCountAttribute(): int
    {
        return 0;
    }

    public function getEligibleAttendeesAttribute(): array
    {
        //caching
        $taggedMembers = $this->tags()
            ->with(['members:id,name'])->get()
            ->pluck('members')->flatten()->pluck('name');

        $groupedMembers = $this->groups()
            ->with(['members:id,name'])->get()
            ->pluck('members')->flatten()->pluck('name');

        $totalMembers = $taggedMembers->merge($groupedMembers)->unique()->toArray();

        return array_values($totalMembers);
    }
}
