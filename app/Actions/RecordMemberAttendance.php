<?php

namespace App\Actions;

use App\DTOs\AttendanceDTO;
use App\Models\Attendance;

class RecordMemberAttendance implements Action
{
    public function __construct(
        public AttendanceDTO $dto
    ) {
    }

    public function exec(): void
    {
        Attendance::create($this->dto->toArray());
    }
}
