<?php

declare(strict_types=1);

namespace App\Enums;

enum ServiceType: string
{
    case NON_EXPIRABLE = 'non-expirable-service';
    case ONE_TIME = 'one-time-service';
    case RECURRING = 'recurring-service';
}
