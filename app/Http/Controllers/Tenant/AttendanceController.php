<?php

namespace App\Http\Controllers\Tenant;

use App\Http\Controllers\Controller;
use Inertia\Response;

class AttendanceController extends Controller
{
    public function index(): Response
    {
        return inertia('Tenant/TenantAttendance', []);
    }
}
