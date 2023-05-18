<?php

namespace Database\Factories;

use App\Models\Branch;
use App\Models\Configuration;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Branch>
 */
class BranchFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->company,
            'identifier' => Str::uuid(),
            'location' => fake()->unique()->randomElements(['Adum', 'Tech', 'Nyhiaeso'], 1)[0],
        ];
    }

    /**
     * Configure the model factory.
     */
    public function configure(): static
    {
        return $this->afterMaking(function (Branch $branch) {
        })->afterCreating(function (Branch $branch) {
            Configuration::create(['branch_id' => $branch->id]);
        });
    }
}
