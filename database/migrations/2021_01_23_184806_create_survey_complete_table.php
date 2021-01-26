<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSurveyCompleteTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('survey_complete', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->unsignedSmallInteger('survey_id');
            $table->enum('status', ['started', 'incomplete', 'finished']);
            $table->timestamps();

            $table->foreign('user_id', 'fk_user_complete')->references('id')->on('users')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('survey_id', 'fk_survey_result')->references('id')->on('surveys')->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('survey_complete');
    }
}
