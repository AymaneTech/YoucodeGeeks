<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('question_tag', function (Blueprint $table) {
            $table->id();
            $table->foreignId("question_id")
                ->constrained("questions")
                ->cascadeOnDelete();
            $table->foreignId("tag_id")
                ->constrained("tags")
                ->cascadeOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('question_tags');
    }
};
