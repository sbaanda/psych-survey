@extends('layouts.app')

@section('content')
    <survey-result
        :result="{{ json_encode($result, JSON_NUMERIC_CHECK) }}"
    ></survey-result>
@endsection
