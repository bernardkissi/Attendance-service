<?php

declare(strict_types=1);

namespace App\Actions\Members;

use App\Actions\Action;
use App\DTOs\MemberDTO;
use App\Models\Member;

class ManageMember implements Action
{
    public static function modify(Member $member, MemberDTO $memberDto): bool
    {
        return $member->updateOrFail($memberDto->toArray());
    }

    public static function remove(Member $member): bool
    {
        return $member->deleteOrFail();
    }

    public static function removeMany(array $ids): void
    {
        //TODO: check if the user is the owner
        Member::whereIn('id', $ids)->delete();
    }

    public function switchMemberBranch(Member $member): void
    {
        //TODO: switch member from one branch to another
        // what happens to their existing branch data

        // replicate the existing member and create a new one 
        // and record the transition in branch transition table

        // mark the old member as deleted... this is ensure the previous activity is not distrupted.

    }
}
