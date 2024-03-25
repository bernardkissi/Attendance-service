<?php

namespace App\Http\Controllers\Tenant;

use App\Http\Controllers\Controller;
use Inertia\Response;

class MemberController extends Controller
{
    public function index(): Response
    {
        return inertia('Tenant/TenantMember', []);
    }

    public function show(): Response
    {
        return inertia('Tenant/TenantMemberDetail', []);
    }
}
