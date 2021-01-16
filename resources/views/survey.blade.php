@extends('layouts.app')

@section('content')
    <survey
        :survey="{{ json_encode($surveyDetails, JSON_NUMERIC_CHECK) }}"
    ></survey>
@endsection
