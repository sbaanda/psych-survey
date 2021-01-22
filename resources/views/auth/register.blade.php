@extends('layouts.guest')

@section('content')
    <register :errors="{{ $errors }}"></register>
@endsection
