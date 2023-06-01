<?php

use App\Actions\CreateServiceQrcode;
use App\Domain\Support\DateManager;
use App\Domain\Tenants\TenantManager;
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

Route::get('/services/create', function () {

    $service = Service::first();
    // return (new ServiceQrcodeGenerator())->generate($service);
});

Route::get('/qrcodes/create', function () {

    $tenant = app(TenantManager::class);
    $config = $tenant->getTenantConfig();
    $dateManager = app(DateManager::class);
    $service = Service::first();
    // dd($service);
    $qrcode = new CreateServiceQrcode($service, $config, $dateManager);
    $qrcode();

    return response()->json([
        'message' => 'Successfully created',
        200,
    ]);
});
