<?php

namespace Database\Seeders;

use App\Models\Admin;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Admin::create([
            "first_name" => "admin",
            "last_name" => "admin last name",
            "email" => "admin@gmail.com",
            "role_id" => 2,
            "password" => Hash::make("password")
        ]);
    }
}
