<?php

declare(strict_types=1);

namespace App\Enums;

enum ReportType: string
{
    case MONTHLY = 'monthly';
    case YEARLY = 'yearly';
}
