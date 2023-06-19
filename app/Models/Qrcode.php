<?php

namespace App\Models;

use Illuminate\Support\Str;
use Spatie\MediaLibrary\HasMedia;
use App\Domain\Tenants\Tenantable;
use Illuminate\Database\Eloquent\Model;
use App\Domain\Qrcodes\Traits\IsTrackable;
use Spatie\MediaLibrary\InteractsWithMedia;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;


class Qrcode extends Model implements HasMedia
{
    use HasFactory,
        InteractsWithMedia,
        Tenantable,
        IsTrackable;

    protected $guarded = [];

    public static function booted(): void
    {
        static::creating(function ($model) {
            $model->identifier = Str::uuid()->toString();
        });
    }

    protected $casts = [
        'location' => 'array',
        'checks' => 'array',
        'is_a_joint_service' => 'bool',
        'allow_visiting_members' => 'bool',
    ];

    public function service(): BelongsTo
    {
        return $this->belongsTo(Service::class);
    }
}
