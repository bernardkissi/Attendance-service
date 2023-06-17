<?php

declare(strict_types=1);

namespace App\Domain\Verification\Checks;

use App\Models\Branch;
use App\Models\Member;
use App\DTOs\VerificationDTO;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class MembershipCheck extends Checker
{
    public function verify(VerificationDTO $dto): bool
    {
        $branchId = $dto->qrcode->branch_id;

        if (!$dto->member || !$dto->member instanceof Member) {
            throw new ModelNotFoundException('No Member was found');
        }

        $isAVisitingMember = $dto->member->branch_id === $branchId;
        $isAJointService = $dto->qrcode->is_joint_service;

        if (!isAVisitingMemeber && $isAVisitingMemeber) {
            return true;
        }

        if () {
            return Branch::where('id', $dto->member->branch_id)->exists();
        }
    }

    // checks if the service is a joint service or allow vistiong members is turned on
    // if the member is a member of the  branch handle it normally
    //1.  if the member branchId is the same as the qrcode branch id

    // if is a member of another branch
    // check if the member branch id belongs to any branch ids


    //Service
    // checks if the qrcode branch exists and the branch has the service in quesion.
}
