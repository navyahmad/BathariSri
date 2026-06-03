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
        Schema::create('nursery_logs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('smart_nursery_id')->constrained()->cascadeOnDelete();
            $table->date('log_date');
            $table->decimal('soil_moisture', 5, 2);
            $table->string('image_path')->nullable();
            $table->text('notes')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('nursery_logs');
    }
};
