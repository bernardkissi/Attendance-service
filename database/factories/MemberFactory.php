<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Member>
 */
class MemberFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'branch_id' => fake()->randomElements([1, 2, 3], 1)[0],
            'memberId' => fake()->numberBetween($min = 10000, $max = 90000),
            'name' => fake()->name,
            'phone' => fake()->phoneNumber,
            'pin' => fake()->numberBetween($min = 1000, $max = 9000),
        ];
    }
}
