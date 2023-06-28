<?php

declare(strict_types=1);

namespace App\Actions\Service;

use App\Actions\Action;
use App\Models\Service;

class ManageService implements Action
{
    public static function modify(): void
    {
        // quiet complicated
        // once updated, it should affect the underlzing qrcodes
    }

    public static function remove(Service $service): bool
    {
        return $service->deleteOrFail();
    }
}
