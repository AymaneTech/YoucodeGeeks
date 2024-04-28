<?php

namespace Database\Seeders;

use App\Models\Admin;
use App\Models\Student;
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
        ])->image()->create([
            "path" => "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&q=70&fm=webp"
        ]);

        Student::create([
            "first_name" => "user",
            "last_name" => "user last name",
            "email" => "user@gmail.com",
            "role_id" => 1,
            "is_verified" => true,
            "password" => Hash::make("password")
        ])->image()->create([
            "path" => "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&q=70&fm=webp"
        ]);
    }
}
