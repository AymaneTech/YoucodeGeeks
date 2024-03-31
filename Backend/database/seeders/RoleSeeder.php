<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Role::create([
            "name" => "student",
        ]);
        Role::create([
            "name" => "admin",
        ]);
        Role::create([
            "name" => "coach",
        ]);
    }
}
