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
        Schema::create('imported_items', function (Blueprint $table) {
            $table->id();
            $table->string('item_name');
            $table->string('hs_code');
            $table->string('origin_country');
            $table->integer('quantity');
            $table->string('unit');
            $table->date('arrival_date');
            $table->enum('inspection_status', ['not_inspected', 'inspected', 'cleared'])->default('not_inspected');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('imported_items');
    }
};
