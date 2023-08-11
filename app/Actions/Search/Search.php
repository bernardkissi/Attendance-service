<?php

declare(strict_types=1);

namespace App\Actions\Search;

use App\Actions\Action;
use App\Models\Member;
use App\Models\Service;

class Search implements Action
{
    public static function members(string $query): array
    {
        $member = Member::search($query)->get();

        return [
            'id' => $member->identifier,
            'name' => $member->name,
        ];
    }

    public static function services(string $query): array
    {
        $service = Service::search($query)->get();

        return [
            'id' => $service->id,
            'name' => $service->name,
        ];
    }
}
