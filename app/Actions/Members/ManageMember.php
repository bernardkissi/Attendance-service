<?php

declare(strict_types=1);

namespace App\Actions\Members;

use App\Actions\Action;
use App\DTOs\MemberDTO;
use App\Models\Member;

class ManageMember implements Action
{
    public static function modify(Member $member, MemberDTO $memberDto): void
    {
        $member->update($memberDto->toArray());
    }

    public static function remove(Member $member): void
    {
        $member->delete();
    }

    public static function removeMany(array $ids): void
    {
        //TODO: check if the user is the owner
        Member::whereIn('id', $ids)->delete();
    }
}
