<?php

namespace App\Models;

use App\Domain\Tenants\Tenantable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Group extends Model
{
    use HasFactory,
        Tenantable;

    protected $guarded = [];

    public function members(): BelongsToMany
    {
        return $this->belongsToMany(Member::class);
    }

    public function services()
    {
        return $this->morphToMany(Service::class, 'serviceable');
    }
}
