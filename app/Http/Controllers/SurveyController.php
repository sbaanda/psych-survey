<?php

namespace App\Http\Controllers;

use App\Models\Complete;
use App\Models\Result;
use App\Models\Survey;
use App\Repositories\SurveyRepository;
use Illuminate\Http\Request;

class SurveyController extends Controller
{
    public function show(SurveyRepository $surveyRepository, $slug) {
        $surveyDetails = Survey::where('slug', $slug)->first();

        $surveyResult = $surveyRepository->calculateSurvey(Complete::where([
            ['survey_id', '=', $surveyDetails->id],
            ['user_id', '=', auth()->user()->id]
        ])->first());

        return view('surveyDescription', compact('surveyDetails', 'surveyResult'));
    }

    public function start($slug) {
        $check = Complete::with(['survey' => function($q) use($slug) {
            $q->where('slug', $slug);
        }, 'results'])->where('user_id', auth()->user()->id)->first();

        if (!is_null($check)){
            $check->delete();
        }

        Survey::where('slug', $slug)->first()->complete()->create([
            'user_id' => auth()->user()->id,
            'status' => 'started'
        ]);

        $complete = Complete::with(['survey' => function($q) use($slug) {
            $q->where('slug', $slug);
        }, 'results'])->where('user_id', auth()->user()->id)->first();

        return view('survey', ['survey' => ['name' => $slug], 'complete' => $complete]);
    }

    public function getSurvey($slug): \Illuminate\Http\JsonResponse
    {
        $survey = Survey::with('questions')->where('slug', $slug)->first();

        return response()->json(compact('survey'));
    }

    public function result(Request $request) {
        $check = Complete::with(['survey' => function($q) {
            return $q->with('questions');
        }])->find($request->complete_id);

        if($check->status === 'started') {
            $check->update([
                'status' => 'incomplete'
            ]);
        }

        Result::create($request->all());

        if ($check->results()->count() === $check->survey->questions->count()) {
            $check->update([
                'status' => 'finished'
            ]);
        }

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
