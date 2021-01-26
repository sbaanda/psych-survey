<?php

namespace App\Http\Controllers;

use App\Models\Complete;
use App\Models\Result;
use App\Models\Survey;
use Illuminate\Http\Request;

class SurveyController extends Controller
{
    public function show($slug) {
        $surveyDetails = Survey::where('slug', $slug)->first();

        return view('surveyDescription', compact('surveyDetails'));
    }

    public function start($slug) {
        $check = Complete::with(['survey' => function($q) use($slug) {
            $q->where('slug', $slug);
        }, 'results'])->where('user_id', auth()->user()->id)->first();

        if (is_null($check)){
            Survey::where('slug', $slug)->first()->complete()->create([
                'user_id' => auth()->user()->id,
                'status' => 'started'
            ]);
        }

        return view('survey', ['survey' => ['name' => $slug], 'complete' => $check]);
    }

    public function getSurvey($slug): \Illuminate\Http\JsonResponse
    {
        $survey = Survey::with('questions')->where('slug', $slug)->first();

        return response()->json(compact('survey'));
    }

    public function result(Request $request) {
        $check = Complete::find($request->complete_id);

        if($check->status === 'started') {
            $check->update([
                'status' => 'incomplete'
            ]);
        }

        Result::create($request->all());

        return response()->json(['status' => 'success']);
    }

    public function removeResult(Request $request) {
        Result::where([
            ['complete_id', '=', $request->complete_id],
            ['no', '=', $request->no]
        ])->delete();

        return response()->json(['status' => 'success']);
    }
}
