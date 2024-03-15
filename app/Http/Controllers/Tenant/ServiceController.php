<?php

namespace App\Http\Controllers\Tenant;

use App\Http\Controllers\Controller;
use Inertia\Response;

class ServiceController extends Controller
{
    public function index(): Response
    {
        return inertia('Tenant/TenantServices', []);
    }

    public function show(): Response
    {
        return inertia('Tenant/TenantServiceDetail', []);
    }
}
