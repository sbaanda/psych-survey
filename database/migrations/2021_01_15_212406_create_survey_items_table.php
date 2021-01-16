<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSurveyItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('survey_items', function (Blueprint $table) {
            $table->smallIncrements('id');
            $table->unsignedSmallInteger('survey_id');
            $table->string('name');

            $table->foreign('survey_id', 'fk_survey_item')->references('id')->on('surveys')->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('survey_items');
    }
}
