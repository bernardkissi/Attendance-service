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
            if (!isset($model->options)) {
                $model->options = [
                    'location' => [
                        'latitude' => null,
                        'longitude' => null,
                    ],
                    'distance_threshold' => null,
                    'verifiers' => [
                        'location' => true,
                        'time' => true,
                        'membership' => true,
                    ],
                    'generate_report' => 'monthly',
                    'generate_qrcode' => 'manually',
                    'verification_type' => 'qrcode',
                ];
            }
        });
    }

    public function branch(): BelongsTo
    {
        return $this->belongsTo(Branch::class);
    }
}
