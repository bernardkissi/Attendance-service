<?php

namespace App\Http\Middleware;

use App\Models\Attendance;
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

        // this check ensures idempotency
        $alreadyRecorded = Attendance::where('qrcode_id', $qrcode->id)
            ->where('member_id', $request->member->id)
            ->exists();

        // return immediately if attendance has already been recorded
        if ($alreadyRecorded) {
            return response()->json(['message' => 'You have already recorded your attendance']);
        }

        $request->merge(['qrcode' => $qrcode]);

        return $next($request);
    }
}
