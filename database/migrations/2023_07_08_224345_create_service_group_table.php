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
        Schema::create('service_group', function (Blueprint $table) {
            $table->id();
            $table->foreignId('group_id')->index()->constrained('groups')->cascadeOnUpdate();
            $table->foreignId('service_id')->index()->constrained('services')->cascadeOnUpdate();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('service_group');
    }
};
