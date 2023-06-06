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
            $table->uuid('identifier')->index();
            // foreign fields
            $table->foreignId('branch_id')->index()->constrained('branches')->cascadeOnDelete();
            $table->foreignId('service_id')->index()->constrained('services')->cascadeOnDelete();

            // qrcode expiration related fields
            $table->time('active_at')->nullable();
            $table->time('expires_at')->nullable();
            $table->time('expired_on')->nullable();
            $table->date('service_date')->nullable();
            $table->text('qrcode_image_string')->nullable();
            // location related fields
            $table->json('location')->nullable();
            $table->float('distance_threshold')->nullable();
            $table->json('checks')->nullable();

            // qrcode related fields
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
