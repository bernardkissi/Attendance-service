<?php

declare(strict_types=1);

namespace App\Domain\Tenants;

use Illuminate\Database\Eloquent\Model;

class ResolveTenant
{
    public static function resolve(): Model
    {
        if (session()->has('tenant' . auth()->user()->id)) {
            return session()->get('tenant' . auth()->user()->id);
        }

        $branch = auth()->user()->branch->load('configuration');

        if (!$branch) {
            throw new \InvalidArgumentException('User does not belong to any branch');
        }

        session()->put('tenant' . auth()->user()->id, $branch);

        return $branch;
    }
}
