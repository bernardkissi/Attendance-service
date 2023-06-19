<?php

declare(strict_types=1);

namespace App\Domain\Verification\Checks;

use App\DTOs\VerificationDTO;
use App\Models\Branch;
use App\Models\Member;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class MembershipCheck extends Checker
{
    public function verify(VerificationDTO $dto): Result
    {
        $branchId = $dto->qrcode->branch_id;

        // checks user is member
        if (! $dto->member || ! $dto->member instanceof Member) {
            throw new ModelNotFoundException('No Member was found');
        }

        $isAMemberOfBranch = $dto->member->branch_id === $branchId;
        $isAJointService = $dto->qrcode->is_a_joint_service;
        $allowVisitingMember = $dto->qrcode->allow_visiting_members;

        // checks if user is not a member of the branch but of another branch
        // and if is a joint service or is allowed for visiting members to record their attendance
        if (! $isAMemberOfBranch && $isAJointService || $allowVisitingMember) {
            $result = Branch::where('id', $dto->member->branch_id)->exists();

            return match ($result) {
                true => new Result($result),
                false => new Result($result, 'You dont belong to any branch'),
            };
        }

        // checks if user is a member of the branch if not he/she can record his/her attendance
        return match ($isAMemberOfBranch) {
            true => new Result($isAMemberOfBranch),
            false => new Result($isAMemberOfBranch, 'You cant record your attenance here'),
        };
    }
}
