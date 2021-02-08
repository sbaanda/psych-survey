@extends('layouts.app')

@section('content')
    <patient
        :type="{{ json_encode($type) }}"
        :user="{{ json_encode($user, JSON_NUMERIC_CHECK) }}"
        :errors="{{ $errors }}"
    ></patient>
@endsection
