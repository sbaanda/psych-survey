<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
    <link href="{{ mix('css/guest.css') }}" rel="stylesheet">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Laravel</title>
</head>
<body>
<div id="guest">
    <v-app id="inspire">
        <v-main>
            <v-container
                fill-height
                fluid
                pa-0
            >
                <v-card
                    align="center"
                    justify="center"
                    class="mx-auto"
                    max-width="344"
                >
                    <form method="POST" action="{{ route(\Route::current()->getName()) }}">
                        @csrf
                        @yield('content')
                    </form>
                </v-card>
            </v-container>
        </v-main>
    </v-app>
</div>
<script src="{{ mix('js/guest.js') }}"></script>
</body>
</html>
