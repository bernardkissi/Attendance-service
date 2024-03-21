<?php

namespace App\Http\Controllers\Tenant;

use App\Http\Controllers\Controller;
use Inertia\Response;

class QrcodeController extends Controller
{
    public function index(): Response
    {
        return inertia('Tenant/TenantQrcode', []);
    }

    public function show(): Response
    {
        return inertia('Tenant/TenantQrcodeDetail', []);
    }
}
