<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
         \App\Models\Survey::factory(1)->create();
         \App\Models\Item::factory(1)->create();
         \App\Models\Question::factory(1)->create();
    }
}