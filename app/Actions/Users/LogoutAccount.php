<?php

declare(strict_types=1);

namespace App\Actions\Users;

use App\Actions\Action;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

class LogoutAccount implements Action
{
    public static function exist(): void
    {
        Session::flush();
        Auth::logout();
    }
}
