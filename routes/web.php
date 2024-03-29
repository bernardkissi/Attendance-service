<?php

use App\Models\Configuration;
use Illuminate\Support\Facades\Config;
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
