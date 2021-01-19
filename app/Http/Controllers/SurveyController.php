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
        return view('survey', ['survey' => ['name' => $slug]]);
    }

    public function getSurvey($slug): \Illuminate\Http\JsonResponse
    {
        $survey = Survey::with('questions')->where('slug', $slug)->first();

        return response()->json(compact('survey'));
    }
}
