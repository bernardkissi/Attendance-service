<?php

namespace App\Http\Controllers\Tenant;

use App\Http\Controllers\Controller;
use Inertia\Response;

class DashboardController extends Controller
{
    public function index(): Response
    {
        return inertia('Tenant/UserDashboard', []);
    }
}
