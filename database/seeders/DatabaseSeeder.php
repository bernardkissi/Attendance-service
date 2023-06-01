<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Branch;
use App\Models\Member;
use App\Models\Service;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // church branches
        $branchA = Branch::factory()->create()->id;
        $branchB = Branch::factory()->create()->id;
        $branchC = Branch::factory()->create()->id;

        // church members
        Member::factory(30)->create();

        // branch administrators
        $userForBranchA = User::factory()->create(['branch_id' => $branchA]);
        $userForBranchB = User::factory()->create(['branch_id' => $branchB]);
        $userForBranchC = User::factory()->create(['branch_id' => $branchC]);

        // super administrator
        User::factory()->create([
            'branch_id' => null,
            'super_admin' => 1,
        ]);

        //create various services
        //Always recurring service [sunday]
        Service::factory()->create([
            'user_id' => $userForBranchA->id,
            'branch_id' => $userForBranchA->branch_id,
        ]);

        // Midweek service
        Service::factory()->create([
            'user_id' => $userForBranchB->id,
            'branch_id' => $userForBranchB->branch_id,
            'name' => 'Mid Week Service',
            'start_time' => '18:30:00',
            'end_time' => '20:30:00',
            'recurring_day' => 'wednesday',
        ]);

        //one time service
        Service::factory()->oneTimeService()->create([
            'user_id' => $userForBranchC->id,
            'branch_id' => $userForBranchC->branch_id,
        ]);

        //time bound recurring service
        Service::factory()->timeBoundRecurringService()->create([
            'user_id' => $userForBranchC->id,
            'branch_id' => $userForBranchC->branch_id,
        ]);
    }
}
