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
        Schema::create('requestes', function (Blueprint $table) {
            $table->id();
            $table->string("fullname",20);
            $table->string("companyName",30);
            $table->string("peojectType",30);
            $table->string("email",30);
            $table->string("phone",14);
            $table->string("comment");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('requestes');
    }
};
