@extends('layouts.app')

@section('content')
    <survey-patients
        :slug="{{ json_encode($slug, JSON_NUMERIC_CHECK) }}"
    ></survey-patients>
@endsection
