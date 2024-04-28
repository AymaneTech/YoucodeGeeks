<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        DB::statement("CREATE TABLE questions (
            author_id INTEGER,
            solved boolean default false,
            FOREIGN KEY (author_id) REFERENCES students (id)
        ) INHERITS(posts)");
        DB::statement("ALTER TABLE  questions ADD CONSTRAINT  questions_id_unique UNIQUE (id);");
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('questions');
    }
};
