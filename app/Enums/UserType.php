<?php

declare(strict_types=1);

namespace App\Enums;

enum UserType: int
{
    case SUPER_ADMIN = 1;
    case BRANCH_ADMIN = 2;
    case USER = 0;
}
