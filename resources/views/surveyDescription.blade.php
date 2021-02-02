@extends('layouts.app')

@section('content')
    <survey-description
        :survey="{{ json_encode($surveyDetails, JSON_NUMERIC_CHECK) }}"
        :result="{{ json_encode($surveyResult, JSON_NUMERIC_CHECK) }}"
    ></survey-description>
@endsection
