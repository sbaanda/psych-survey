@extends('layouts.app')

@section('content')
    <survey
        :survey="{{ json_encode($survey, JSON_NUMERIC_CHECK) }}"
        :complete="{{ json_encode($complete, JSON_NUMERIC_CHECK) }}"
    ></survey>
@endsection
