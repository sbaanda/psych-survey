<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateSurveyResultsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('survey_results', function (Blueprint $table) {
            $table->unsignedBigInteger('complete_id');

            $table->foreign('complete_id', 'fk_complete_result')->references('id')->on('survey_complete')->onDelete('cascade')->onUpdate('cascade');
        });

        \DB::statement('alter table survey_results modify complete_id bigint unsigned not null after id;');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
