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
        Schema::create('serviceables', function (Blueprint $table) {
            $table->id();
            $table->foreignId('service_id')->index()->constrained('services')->cascadeOnDelete();
            $table->morphs('serviceable');
            $table->timestamps();

            $table->index(['serviceable_id', 'serviceable_type']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('serviceables');
    }
};
