<?php

namespace App\Models;

use App\Domain\Tenants\Tenantable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Str;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Qrcode extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia, Tenantable;

    protected $guarded = [];

    public static function booted(): void
    {
        static::creating(function ($model) {
            $model->identifier = Str::uuid()->toString();
        });
    }

    public function service(): BelongsTo
    {
        return $this->belongsTo(Service::class);
    }
}
