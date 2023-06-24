<?php

namespace App\Models;

use App\Models\Branch;
use Illuminate\Support\Str;
use Laravel\Sanctum\HasApiTokens;
use App\Domain\Tenants\Tenantable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Member extends Authenticatable
{
    use
    HasFactory,
        HasApiTokens,
        SoftDeletes,
        Tenantable;

    protected $guarded = [];

    public static function booted(): void
    {
        static::creating(function ($model) {
            dd('called');
            $model->identifier = Str::uuid()->toString();
        });
    }

    public function branch(): BelongsTo
    {
        return $this->belongsTo(Branch::class);
    }
}
