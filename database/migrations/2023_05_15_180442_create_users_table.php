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
        Schema::create('users', function (Blueprint $table) {
            //primary key
            $table->id();

            //foreign field
            $table->foreignId('branch_id')->nullable()->index()->constrained('branches')->cascadeOnDelete();

            //local fields
            $table->string('name');
            $table->string('email')->unique();
            $table->integer('pin');
            $table->tinyInteger('super_admin')->default(0);
            $table->string('password');

            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
