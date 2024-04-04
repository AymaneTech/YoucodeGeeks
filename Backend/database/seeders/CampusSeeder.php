<?php

namespace Database\Seeders;

use App\Models\Campus;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CampusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Campus::create([
            "name" => "Campus Safi",
            "address" => "14 Av. Zerktouni, Safi"
        ]);
        Campus::create([
            "name" => "Campus El Youssoufia",
            "address" => "14 Av. Youssoufia, you"
        ]);
    }
}
