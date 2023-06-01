<?php

namespace Database\Factories;

use App\Enums\ServiceType;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Service>
 */
class ServiceFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => fake()->randomElements([1, 2, 3], 1)[0],
            'branch_id' => fake()->randomElements([1, 2, 3], 1)[0],
            'name' => 'Sunday Service',
            'type' => ServiceType::NON_EXPIRABLE->value,
            'start_time' => '08:30:00',
            'end_time' => '13:30:00',
            'recurring' => 1,
            'recurring_day' => 'sunday',
        ];
    }

    public function oneTimeService(): Factory
    {
        return $this->state(function (array $attributes) {
            return [
                'name' => 'One Time Service',
                'type' => ServiceType::ONE_TIME->value,
                'recurring' => 0,
                'recurring_day' => 'null',
                'expirable' => 1,
                'commence_date' => '2023-05-26',
                'end_date' => '2023-05-26',
            ];
        });
    }

    public function timeBoundRecurringService(): Factory
    {
        return $this->state(function (array $attributes) {
            return [
                'name' => 'Time Bound Service',
                'type' => ServiceType::RECURRING->value,
                'recurring' => 1,
                'recurring_day' => 'null',
                'expirable' => 1,
                'commence_date' => '2023-05-26',
                'end_date' => '2023-05-29',
            ];
        });
    }
}
