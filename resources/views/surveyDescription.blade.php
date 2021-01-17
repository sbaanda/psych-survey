@extends('layouts.app')

@section('content')
    <survey-description
        :survey="{{ json_encode($surveyDetails, JSON_NUMERIC_CHECK) }}"
    ></survey-description>
@endsection
