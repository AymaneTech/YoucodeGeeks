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
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->string("title")->unique();
            $table->string("slug");
            $table->text("details");
            $table->text("body");
            $table->foreignId("author_id")
                ->constrained("students")
                ->cascadeOnDelete();
            $table->foreignId("category_id")
                ->constrained("categories")
                ->cascadeOnDelete();
            $table->integer("views")->default(0);
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('posts');
    }
};
