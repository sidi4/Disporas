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
        Schema::create('user_mauritanis', function (Blueprint $table) {
            $table->id();
            $table->string('nom');
            $table->string('prenom');
            $table->string('num_passport')->unique();
            $table->text('NNI')->unique();
            $table->string('email')->unique();
            $table->text('image');
            $table->string('sex');
            $table->string('Adresse');
            $table->string('pays_residence');
            $table->integer('enfant');
            $table->text('num_telphon')->unique();
            $table->string('le_travil');
            $table->string('type_identite');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_mauritanis');
    }
};
