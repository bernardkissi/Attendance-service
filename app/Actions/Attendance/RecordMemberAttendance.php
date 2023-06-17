<?php

declare(strict_types=1);

namespace App\Actions\Attendance;

use App\Domain\Verification\VerificationService;
use App\DTOs\AttendanceDTO;
use App\DTOs\VerificationDTO;
use App\Models\Attendance;

class RecordMemberAttendance
{
    public static function record(VerificationDTO $verificationDto, AttendanceDTO $attendanceDto): Attendance
    {
        // use the verification service and pass in the validated request object
        $verifier = new VerificationService($verificationDto);
        // run the qrcode checks
        $checks = $verifier->runChecks();
        // check if any checks fails and throw an exception
        if (!$checks) {
            throw new \Exception('Verification failed because of x reason');
        }
        // create the attendance
        $attendance = Attendance::create($attendanceDto->toArray());

        return $attendance;
    }
}
