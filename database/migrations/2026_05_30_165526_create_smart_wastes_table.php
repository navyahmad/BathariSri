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
        Schema::create('smart_wastes', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->string('waste_type');
            $table->enum('condition', ['kering', 'basah', 'membusuk']);
            $table->decimal('weight_kg', 8, 2);
            $table->string('recommended_action');
            $table->string('target_buyer');
            $table->decimal('estimated_value', 15, 2);
            $table->decimal('carbon_saved_kg', 8, 2);
            $table->enum('report_status', ['draft', 'reported'])->default('draft');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('smart_wastes');
    }
};
