<?php

use App\Domain\Summaries\AttendanceSummary;
use App\Domain\Summaries\MemberSummary;
use App\Domain\Summaries\QrcodeSummary;
use App\Domain\Summaries\ServiceOccurrenceSummary;
use App\DTOs\FilterQueryDTO;
use App\Http\Controllers\Tenant\DashboardController;
use App\Http\Controllers\Tenant\QrcodeController;
use App\Http\Controllers\Tenant\ServiceController;
use App\Models\Member;
use App\Models\Service;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Tenant Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/dashboard', [DashboardController::class, 'index'])->name('home');
Route::get('/services', [ServiceController::class, 'index'])->name('service.index');
Route::get('/services/detail', [ServiceController::class, 'show'])->name('service.show');

Route::get('/qrcodes', [QrcodeController::class, 'index'])->name('qrcode.index');
Route::get('/qrcodes/detail', [QrcodeController::class, 'show'])->name('qrcode.show');

// Route::get('attendance-summary', function (Request $request) {
//     $dto = FilterQueryDTO::fromRequest($request);
//     $summary = new AttendanceSummary();

//     return $summary->summarize($dto);
// });

// Route::get('member-summary', function (Request $request) {
//     $dto = FilterQueryDTO::fromRequest($request);
//     $summary = new MemberSummary(Member::find(3));

//     return $summary->summarize()->first();
// });

// Route::get('qrcode-summary', function (Request $request) {
//     $dto = FilterQueryDTO::fromRequest($request);
//     $summary = new QrcodeSummary();

//     return $summary->summarize();
// });

// Route::get('services-summary', function (Request $request) {
//     $service = Service::find(5);
//     $summary = new ServiceOccurrenceSummary($service);

//     return $summary->summarize();
// });
