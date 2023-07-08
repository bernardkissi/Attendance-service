<?php

namespace App\Domain\Qrcodes\Traits;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;

trait isManageable
{
    //model scopes
    public function scopeIsEnded(Builder $query): void
    {
        $query->where('expirable', true)
            ->where('end_date', '<', Carbon::today());
    }

    public function scopeIsActive(Builder $query): void
    {
        $query->where('end_date', '>', Carbon::today())
            ->orWhere('end_date', '=', null);
    }

    public function scopeNonExpiryServicesActiveToday(Builder $query): void
    {
        $query->where('recurring_day', '=', now()->format('l'));
    }

    // model properties
    public function getIsEndingInDaysAttribute(): ?string
    {
        if ($this->end_date !== null) {
            return now()->diffInDays(Carbon::parse($this->end_date));
        }

        return null;
    }

    public function getIsStartingInDaysAttribute(): ?string
    {
        if ($this->commence_date !== null) {
            return now()->diffInDays(Carbon::parse($this->commence_date));
        }

        return null;
    }

    public function getHasEndedAttribute(): bool
    {
        if (! empty($this->end_date) && Carbon::parse($this->end_date) < Carbon::today()) {
            return true;
        }

        return false;
    }
}
