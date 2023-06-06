<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasManyThrough;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Branch extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function configuration(): HasOne
    {
        return $this->hasOne(Configuration::class);
    }

    public function services(): HasMany
    {
        return $this->hasMany(Service::class);
    }

    public function qrcodes(): HasManyThrough
    {
        return $this->hasManyThrough(Service::class, Qrcode::class);
    }
}
