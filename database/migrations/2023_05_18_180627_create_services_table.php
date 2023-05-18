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
        Schema::create('services', function (Blueprint $table) {
            $table->id();

            //foreign fields
            $table->foreignId('branch_id')->index()->constrained('branches')->cascadeOnDelete();
            $table->foreignId('user_id')->nullable()->index()->constrained('users');

            //local fields
            $table->string('name')->unique();
            $table->dateTime('start_time')->nullable();
            $table->dateTime('end_time')->nullable();

            // re-occuring fields
            $table->tinyInteger('reoccurring')->default(0);
            $table->string('service_reoccuring_period')->nullable();

            // service expiration fields
            $table->tinyInteger('expirable')->default(0);
            $table->dateTime('service_active_date')->nullable();
            $table->dateTime('service_expiry_date')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('services');
    }
};
