<?php

namespace App\Domain\Qrcodes\Traits;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;

trait IsTrackable
{
    // Model scopes for fitering qrcodes
    public function scopeIsActiveToday(Builder $query): void
    {
        $query->whereDate('service_date', '=', Carbon::today())
            ->where('active_at', '<=', now()->format('H:i:s'))
            ->where('expires_at', '>=', now()->format('H:i:s'));
    }

    public function scopeIsActiveTomorrow(Builder $query): void
    {
        $query->whereDate('service_date', '=', Carbon::tomorrow())
            ->where('active_at', '<=', now()->format('H:i:s'))
            ->where('expires_at', '>=', now()->format('H:i:s'));
    }

    public function scopeIsExpired(Builder $query): void
    {
        $query->whereDate('service_date', '<', now())
            ->where('expired_on', '!=', null);
    }

    // Model properties for tracking qrcodes
    public function getIsActiveInAttribute(): ?array
    {
        $startDate = Carbon::parse("{$this->service_date} {$this->active_at}");
        if (now()->lt($startDate)) {
            $diff = now()->diff($startDate);

            return ['hours' => $diff->h, 'minutes' => $diff->i];
        }

        return null;
    }

    public function getIsExpiringInAttribute(): ?array
    {
        $endDate = Carbon::parse("{$this->service_date} {$this->active_at}");
        if (now()->lt($endDate)) {
            $diff = now()->diff($endDate);

            return ['hours' => $diff->h, 'minutes' => $diff->i];
        }

        return null;
    }

    public function getIsActiveAttribute(): bool
    {
        return now()->gte(Carbon::parse("{$this->service_date} {$this->active_at}")) &&
            now()->lte(Carbon::parse("{$this->service_date} {$this->active_at}"));
    }

    public function getIsNotActiveAttribute(): bool
    {
        return !$this->isActive();
    }

    public function getIsExpiredAttribute(): bool
    {
        return Carbon::parse("{$this->service_date} {$this->expires_at}")->isPast();
    }
}
