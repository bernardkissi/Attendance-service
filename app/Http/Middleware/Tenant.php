<?php

namespace App\Http\Middleware;

use App\Domain\Tenants\ResolveTenant;
use App\Domain\Tenants\TenantManager;
use App\Models\Branch;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class Tenant
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $tenant = ResolveTenant::resolve();

        if (! $tenant instanceof Branch) {
            dd('No branch found');
        }

        app(TenantManager::class)->setTenant($tenant);

        return $next($request);
    }
}
