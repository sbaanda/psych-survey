<?php

namespace App\Http\Controllers;

use App\Models\Survey;
use Illuminate\Http\Request;

class SurveyController extends Controller
{
    public function show($slug) {
        $surveyDetails = Survey::where('slug', $slug)->first();

        return view('surveyDescription', compact('surveyDetails'));
    }

    public function start($slug) {
        $survey = Survey::with(['items' => function($query) {
            $query->with('questions');
        }])->where('slug', $slug)->first();

        return view('survey', compact('survey'));
    }
}