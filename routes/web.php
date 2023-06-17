<?php

use App\Domain\Qrcodes\Generators\pdf\PDFGenerator;
use App\Domain\Qrcodes\Generators\qrcode\ServiceQrcodeGenerator;
use App\Models\Configuration;
use App\Models\Qrcode;
use App\Models\Service;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/configuration', function () {
    $cfg = Configuration::create([]);

    return $cfg;
    // Config::set('tenant.config', Configuration::find(5));
    // return Config::get('tenant.config.options');
});

Route::get('/services/filter', function () {
    return Service::isActive()->get();
});

Route::get('/qrcodes/filter', function (Request $request) {
    return Qrcode::isActiveTomorrow()->get();
});

// Route::get('/qrcode', function () {
//     $model = User::find(1);
//     (new ServiceQrcodeGenerator())->generate($model);

//     return (new PDFGenerator())->generate($model);
// });

// How to create a qrcode for a service
//1. First create a service
//2. now use the qrcode relation to create a qrcode
//3. use the threshold in your config to set an expires_at
// if the service does not have a service start day
// check if the service day is today and is within the set threshold
// if it has set the service date to the intended date from the service.
