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
        Schema::create('qrcodes', function (Blueprint $table) {
            $table->id();

            // foreign fields
            $table->foreignId('service_id')->nullable()->index()->constrained('services')->cascadeOnDelete();

            // qrcode expiration related fields
            $table->dateTime('expires_at')->nullable();
            $table->dateTime('expired_on')->nullable();

            // qrcode related fields
            $table->string('qrcode_data')->nullable();
            $table->string('content_hash')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('qrcodes');
    }
};
