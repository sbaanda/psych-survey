<?php


namespace App\Repositories;

use App\Models\Item;

class SurveyRepository
{
    public function calculateSurvey($complete): ?array
    {
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
        $results['barLabels'] = collect($results['items'])->map(function($value) {
            return $value->name;
        })->toArray();

        $results['barDatasets'] =  [
            [
                'label' => "Valoare",
                'backgroundColor' => "#1460aa",
                'data' => collect($results['items'])->map(function($value) {
                            return count($value->results);
                        })->toArray(),
            ], [
                'label' => "Prag",
                'backgroundColor' => "#bd2f2f",
                'data' => $rules
            ]
        ];

        $results['datatable'] = $complete->results->map(function($value) {
            return [
                'id' => $value->id,
                'item' => $value->items->name,
                'name' => $value->question->name,
                'answer' => json_decode($value->value)->choice
            ];
        });

        $results['complete'] = $complete;

        return $results;
    }
}
