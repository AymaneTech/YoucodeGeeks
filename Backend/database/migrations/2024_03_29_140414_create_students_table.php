<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        DB::statement("CREATE TABLE students (
            class_room_id INT,
            badge VARCHAR(30) NULL,
            FOREIGN KEY (class_room_id) REFERENCES class_rooms (id)
        ) INHERITS(users)");
        DB::statement("ALTER TABLE  students ADD CONSTRAINT  students_id_unique UNIQUE (id);");
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('students');
    }
};
