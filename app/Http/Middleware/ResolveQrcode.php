<?php

namespace App\Http\Middleware;

use App\Models\Qrcode;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class ResolveQrcode
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (!isset($request->qrcodeIdentifier)) {
            abort(403, 'No identifier is provided');
        }

        $qrcode = Qrcode::whereIdentifier($request->qrcodeIdentifier)->first();

        if (!$qrcode) {
            abort(404, 'This qrcode does not exist for any service');
        }

        $request->merge(['qrcode' => $qrcode]);

        return $next($request);
    }
}
