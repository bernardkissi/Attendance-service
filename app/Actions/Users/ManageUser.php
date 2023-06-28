<?php

declare(strict_types=1);

namespace App\Actions\Users;

use App\Actions\Action;
use App\DTOs\UserDTO;
use App\Models\User;

class ManageUser implements Action
{
    public static function modify(User $user, UserDTO $userDto): bool
    {
        return $user->updateOrFail($userDto->toArray());
    }

    public static function remove(User $user): bool
    {
        return $user->deleteOrFail();
    }
}
