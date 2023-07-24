<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\odel=Requeste>
 */
class RequesteFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'fullname' => fake()->firstName(),
            'companyName' => fake()->word(),
            'peojectType' => fake()->word(),
            'email' => fake()->email(),
            'phone' => fake()->word(),
            'comment' => fake()->text(),
        ];
    }
}
