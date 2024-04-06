<?php

namespace Database\Seeders;

use App\Models\Admin;
use App\Models\User;
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
            "is_verified" => true,
            "password" => Hash::make("password")
        ]);

        User::create([
            "first_name" => "user",
            "last_name" => "user last name",
            "email" => "user@gmail.com",
            "role_id" => 1,
            "is_verified" => true,
            "password" => Hash::make("password")
        ]);
    }
}
