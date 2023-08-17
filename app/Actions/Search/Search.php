<?php

declare(strict_types=1);

namespace App\Actions\Search;

use App\Actions\Action;
use App\DTOs\SearchResultDTO;
use App\Models\Member;
use App\Models\Service;

class Search implements Action
{
    public static function members(string $query): SearchResultDTO
    {
        $member = Member::search($query)->get();

        return new SearchResultDTO($member->identifier, $member->name);
    }

    public static function services(string $query): SearchResultDTO
    {
        $service = Service::search($query)->get();

        return new SearchResultDTO($service->id, $service->name);
    }
}
