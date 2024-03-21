<?php

namespace App\Actions\Members;

use App\Actions\Action;
use App\Models\Member;
use Illuminate\Support\Collection;

class FetchMember implements Action
{
    // Think about applying filters to fetch a subset of members
    public function fetchAll(): Collection
    {
        return Member::all()->paginate(10);
    }

    public function fetchOne(Member $member): Member
    {
        return $member;
    }

}
