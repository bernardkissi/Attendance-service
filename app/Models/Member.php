<?php

namespace App\Models;

use App\Domain\Tenants\Tenantable;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Support\Str;
use Laravel\Sanctum\HasApiTokens;

class Member extends Authenticatable
{
    use HasFactory,
        HasApiTokens,
        Tenantable;

    protected $guarded = [];

    public static function booted(): void
    {
        static::creating(function ($model) {
            $model->identifier = Str::uuid()->toString();
        });
    }

    public function branch(): BelongsTo
    {
        return $this->belongsTo(Branch::class);
    }
}
