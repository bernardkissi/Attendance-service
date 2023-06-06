<?php

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
    $service = $branch->services()->select('id', 'name')->whereId(1)->first();

    return [
        'branch' => $branch,
        'service' => $service,
    ];
});

Route::post('/login', function (Request $request) {

    $member = Member::wherePin($request->pin)->first();
    $token = $member->createToken('member')->plainTextToken;

    return response()->json(['token' => $token]);
});
