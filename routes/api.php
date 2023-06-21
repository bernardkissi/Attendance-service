<?php

use App\Actions\Attendance\RecordMemberAttendance;
use App\Domain\Verification\Checks\LocationCheck;
use App\Domain\Verification\Checks\MembershipCheck;
use App\Domain\Verification\Checks\ServiceCheck;
use App\Domain\Verification\Checks\TimeCheck;
use App\Domain\Verification\VerificationService;
use App\DTOs\AttendanceDTO;
use App\DTOs\VerificationDTO;
use App\Models\Attendance;
use App\Models\Member;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware(['auth:sanctum', 'member'])->get('/user', function (Request $request) {
    $branch = request()->member->branch;
    $service = $branch->services()->get();

    return [
        'branch' => $branch,
        'service' => $service,
    ];
});

Route::get('/record', function (Request $request) {
    $attendance = AttendanceDTO::fromRequest($request)->toArray();
    $recorded = Attendance::create($attendance);

    return $recorded;
})->middleware(['auth:sanctum', 'member', 'qrcode']);

Route::get('/checks', function (Request $request) {

    $verificationDto = VerificationDTO::fromRequest($request);

    $locationCheck = new LocationCheck();
    $timeCheck = new TimeCheck();
    $memberCheck = new MembershipCheck();
    $serviceCheck = new ServiceCheck();

    $locationStatus = $locationCheck->verify($verificationDto);
    $timeStatus = $timeCheck->verify($verificationDto);
    $memberStatus = $memberCheck->verify($verificationDto);
    $serviceStatus = $serviceCheck->verify($verificationDto);

    return [
        'locationCheck' => [$locationStatus->status, $locationStatus->reason],
        'timeStatus' => [$timeStatus->status, $timeStatus->reason],
        'memberStatus' => [$memberStatus->status, $memberStatus->reason],
        'serviceStatus' => [$serviceStatus->status, $serviceStatus->reason],
    ];
})->middleware(['auth:sanctum', 'member', 'qrcode']);

Route::get('/verification', function (Request $request) {
    $verificationDto = VerificationDTO::fromRequest($request);

    $checks = new VerificationService($verificationDto);

    return $checks->runChecks();
})->middleware(['auth:sanctum', 'member', 'qrcode']);

Route::get('/workflow', function (Request $request) {
    $verificationDto = VerificationDTO::fromRequest($request);
    $attendanceDto = AttendanceDTO::fromRequest($request);

    return RecordMemberAttendance::record($verificationDto, $attendanceDto);
})->middleware(['auth:sanctum', 'member', 'qrcode']);

Route::post('/login', function (Request $request) {

    $member = Member::wherePin($request->pin)->first();
    $token = $member->createToken('member')->plainTextToken;

    return response()->json(['token' => $token]);
});
