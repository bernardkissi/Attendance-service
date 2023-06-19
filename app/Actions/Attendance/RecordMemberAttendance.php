<?php

declare(strict_types=1);

namespace App\Actions\Attendance;

use App\Domain\Verification\Checks\Result;
use App\Domain\Verification\VerificationService;
use App\DTOs\AttendanceDTO;
use App\DTOs\VerificationDTO;
use App\Models\Attendance;

class RecordMemberAttendance
{
    public static function record(VerificationDTO $verificationDto, AttendanceDTO $attendanceDto): Attendance|array
    {
        // use the verification service and pass in the validated request object
        $verifier = new VerificationService($verificationDto);
        // run the qrcode checks
        $checks = $verifier->runChecks();
        // extract the final result from the checks
        $result = $checks->every(fn (Result $result) => $result->status === true);
        // check if any checks fails and throw an exception
        if (! $result) {
            $errors = $checks->filter(fn (Result $result) => $result->status === false);

            return [
                'errors' => $errors->map(fn (Result $result) => $result->reason)->toArray(),
                'message' => 'Verification failed',
            ];
        }
        // create the attendance
        $attendance = Attendance::create($attendanceDto->toArray());

        return $attendance;
    }
}
