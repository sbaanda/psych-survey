<?php

namespace App\Http\Controllers;

use App\Models\Survey;
use Illuminate\Http\Request;

class SurveyController extends Controller
{
    public function show($slug) {
        $surveyDetails = Survey::where('slug', $slug)->first();
        return view('survey', compact('surveyDetails'));
    }
}
