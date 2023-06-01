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
            $table->string('type');

            //time and date fields
            $table->time('start_time')->nullable();
            $table->time('end_time')->nullable();
            $table->date('commence_date')->nullable();
            $table->date('end_date')->nullable();

            // expiration fields
            $table->tinyInteger('expirable')->default(0);
            $table->dateTime('expired_at')->nullable();

            // re-occuring fields
            $table->tinyInteger('recurring')->default(0);
            $table->string('recurring_day')->nullable();

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
