<?php

declare(strict_types=1);

namespace App\Actions\Users;

use App\Actions\Action;
use App\DTOs\AuthDTO;
use Illuminate\Support\Facades\Auth;

class AccessAccount implements Action
{
    public static function login(AuthDTO $authDto): bool
    {
        if (Auth::attempt($authDto->toArray())) {
            session()->regenerate();

            return true;
        }

        return false;
    }
}
