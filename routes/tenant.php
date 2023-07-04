<?php

use App\Models\Member;
use App\Models\Qrcode;
use App\DTOs\MemberDTO;
use App\Models\Service;
use App\Enums\ServiceType;
use Illuminate\Http\Request;
use App\DTOs\ServiceQrcodeDTO;
use App\Imports\MembersImport;
use App\DTOs\OneTimeServiceDTO;
use App\DTOs\RecurringServiceDTO;
use App\DTOs\NonExpirableServiceDTO;
use App\Actions\Members\CreateMember;
use App\Domain\Tenants\TenantManager;
use Illuminate\Support\Facades\Route;
use App\Actions\Service\CreateService;
use App\Actions\Qrcode\CreateServiceQrcode;
use App\Actions\Qrcode\GenerateServiceQrcodePdf;
use App\Actions\Service\ManageService;

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
    $serviceQrCodeDTO = ServiceQrCodeDTO::fromRequest($request);

    $qrcode = CreateServiceQrcode::create($serviceQrCodeDTO);

    return response()->json([
        'message' => 'Successfully created',
        'data' => $qrcode,
        200,
    ]);
});

Route::get('/member/create', function (Request $request) {
    $memberDto = MemberDTO::fromRequest($request);

    return CreateMember::create($memberDto);
    //Excel::toCollection(new MembersImport, filePath: $request->file, readerType: 'csv');
});

Route::post('/member/import', function (Request $request) {
    dd($request->file('file'));
    //Excel::toCollection(new MembersImport, filePath: $request->file, readerType: 'csv');
});

Route::get('/services/{service}', function (Request $request, Service $service) {

    $dto = match ($service->type) {
        'non-expirable-service' => NonExpirableServiceDTO::fromRequest($request),
        'one-time-service' => OneTimeServiceDTO::fromRequest($request),
        'recurring-service' => RecurringServiceDTO::fromRequest($request),
    };

    ManageService::modify($service, $dto);

    return response()->json(['message' => 'hello world']);
});
