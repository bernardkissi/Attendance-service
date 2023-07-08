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
        Schema::create('attendances', function (Blueprint $table) {
            $table->id();
            // Foreign tables
            $table->foreignId('qrcode_id')->index()->constrained()->cascadeOnDelete();
            $table->foreignId('branch_id')->index()->constrained()->cascadeOnDelete();
            $table->foreignId('member_id')->index()->constrained()->cascadeOnDelete();
            $table->foreignId('service_id')->index()->constrained()->cascadeOnDelete();
            //local fields
            $table->datetime('recorded_at')->index();
            $table->string('device')->nullable();
            $table->string('user_agent')->nullable();
            $table->json('location')->nullable();
            $table->string('recorded_by_user_id')->nullable();
            $table->string('ip_address')->nullable();
            $table->integer('visitor_branch_id')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('attendances');
    }
};
