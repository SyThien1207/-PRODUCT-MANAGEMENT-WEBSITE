<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('db_user', function (Blueprint $table) {
            $table->id(); //id
       $table->string('name');
            $table->string('username');
            $table->string('password');
            $table->string('gender');
            $table->string('phone');
            $table->string('email');
            $table->string('roles');
            $table->timestamps(); //created_at, updated_at
       $table->unsignedInteger('created_by')->default(1);
       $table->unsignedInteger('updated_by')->nullable();
       $table->unsignedTinyInteger('status')->default(2);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('db_user');
    }
};
