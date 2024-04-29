<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
//        Category::factory(10)->create();
        $this->call(class: RoleSeeder::class);
        $this->call(class: AdminSeeder::class);
        $this->call(class: CampusSeeder::class);
    }
}
