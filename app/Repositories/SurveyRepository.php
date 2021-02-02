<?php


namespace App\Repositories;


use App\Models\Complete;
use App\Models\Item;

class SurveyRepository
{
    public function calculateSurvey($complete) {
        if (is_null($complete) || $complete->status !== 'finished') {
            return null;
        }

        $rules = [3, 3, 2, 1];

        $results['items'] = Item::with(['results' => function($q) use($complete) {
            $q->where([
                ['complete_id', '=', $complete->id],
                ['value->choice', '=', true]
            ]);
        }])->get()->map(function($value, $key) use($rules) {
            $value->score_ceil = $rules[$value->id - 1];
            $value->total_results = $value->results->count();
            return $value;
        });
        $results['complete'] = $complete;

        return $results;
    }
}
