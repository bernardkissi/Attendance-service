<?php

namespace App\Models;

use App\Domain\Reporter\ReportGenerator;
use App\DTOs\FilterQueryDTO;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Attendance extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected $casts = [
        'location' => 'array',
        'recorded_at' => 'datetime',
    ];

    public function scopeWithFilter(Builder $builder, $filters = []): Builder
    {
        $queryDTO = FilterQueryDTO::fromRequest(request());

        return (new ReportGenerator($queryDTO))->apply($builder, $filters);
    }

    public function member(): BelongsTo
    {
        return $this->belongsTo(Member::class);
    }
}
