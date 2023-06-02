<?php

use App\Actions\CreateService;
use App\Actions\CreateServiceQrcode;
use App\Actions\GenerateServiceQrcodePdf;
use App\Domain\Support\DateManager;
use App\Domain\Tenants\TenantManager;
use App\DTOs\NonExpirableServiceDTO;
use App\DTOs\OneTimeServiceDTO;
use App\DTOs\RecurringServiceDTO;
use App\DTOs\ServiceQrcodeDTO;
use App\Enums\ServiceType;
use App\Models\Member;
use App\Models\Qrcode;
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

Route::get('/members', function (Request $request) {
    $members = Member::all();

    return $members;
})->middleware('tenant');

Route::get('/members/{member}', function (Request $request, Member $member) {
    return $member->name;
})->middleware('tenant');

Route::get('/configuration', function () {
    $tenant = app(TenantManager::class);

    return $tenant = app(TenantManager::class)->getTenantConfig()->options;
    // Config::set('tenant.config', Configuration::find(5));
    // return Config::get('tenant.config.options');
});

Route::get('/services', function () {
    return Service::query()->get();
});

Route::get('/services/create', function (Request $request) {

    $serviceDTO = match ($request->type) {
        ServiceType::NON_EXPIRABLE->value => NonExpirableServiceDTO::fromRequest($request),
        ServiceType::ONE_TIME->value => OneTimeServiceDTO::fromRequest($request),
        ServiceType::RECURRING->value => RecurringServiceDTO::fromRequest($request),
        default => throw new \InvalidArgumentException('Service type is not supported')
    };

    $service = new CreateService($serviceDTO);

    return $service->exec();
});

Route::post('qrcodes/pdf', function () {
    $qrcode = Qrcode::first();
    $generator = new GenerateServiceQrcodePdf($qrcode);

    return $generator->exec();
});

Route::get('/qrcodes/create', function (Request $request) {

    $dateManager = app(DateManager::class);
    $serviceQrCodeDTO = ServiceQrCodeDTO::fromRequest($dateManager, $request);

    $qrcode = new CreateServiceQrcode($serviceQrCodeDTO);
    $qrcode->exec();

    return response()->json([
        'message' => 'Successfully created',
        200,
    ]);
});
