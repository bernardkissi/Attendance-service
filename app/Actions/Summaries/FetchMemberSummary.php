<?php

declare(strict_types=1);

namespace App\Actions\Summaries;

use App\Actions\Action;
use App\Domain\Summaries\MemberSummary;
use App\Models\Member;
use Illuminate\Support\Collection;

class FetchMemberSummary implements Action
{
    public function get(Member $member): Collection
    {
        $summariser = new MemberSummary($member);

        return $summariser->summarize()->first();
    }

    public function all(): Collection
    {
        $summariser = new MemberSummary();

        return $summariser->summarize();
    }
}
