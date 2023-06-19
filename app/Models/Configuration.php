<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Configuration extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected $casts = [
        'options' => 'array',
    ];

    public static function booted(): void
    {
        static::creating(function ($model) {
            if (! isset($model->options)) {
                $model->options = [
                    'location' => [
                        'latitude' => 50.9406717, // for demo purposes
                        'longitude' => 7.0623543, // for demo purposes
                    ],
                    'distance_threshold' => 4.0,
                    'allow_visiting_members' => false,
                    'checks' => [
                        'location' => true,
                        'time' => true,
                        'membership' => true,
                        'service' => true,
                    ],
                    'generate_report' => 'monthly',
                    'generate_qrcode' => 'manually',
                    'verification_type' => 'all',
                ];
            }
        });
    }

    public function branch(): BelongsTo
    {
        return $this->belongsTo(Branch::class);
    }
}
