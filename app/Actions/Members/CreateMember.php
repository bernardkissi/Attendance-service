<?php

declare(strict_types=1);

namespace App\Actions\Members;

use App\Actions\Action;
use App\DTOs\MemberDTO;
use App\Imports\MembersImport;
use App\Models\Member;
use Illuminate\Http\UploadedFile;

class CreateMember implements Action
{
    public static function create(MemberDTO $memberDto): Member
    {
        return Member::create($memberDto->toArray());
    }

    public static function importMembersFromCsv(UploadedFile $file): void
    {
        (new MembersImport)->import($file, null, \Maatwebsite\Excel\Excel::CSV);
    }
}
