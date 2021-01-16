<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSurveyQuestionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('survey_questions', function (Blueprint $table) {
            $table->smallIncrements('id');
            $table->unsignedSmallInteger('item_id');
            $table->smallInteger('no');
            $table->string('name');
            $table->json('options');
            $table->boolean('isBinary');

            $table->foreign('item_id', 'fk_item_question')->references('id')->on('survey_items')->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('survey_questions');
    }
}
