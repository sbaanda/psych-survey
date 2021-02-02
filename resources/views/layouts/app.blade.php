<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
    <link href="{{ mix('css/app.css') }}" rel="stylesheet">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <script type="text/javascript">
        window.App = @json($jsApp);
    </script>


    <title>Laravel</title>
</head>
<body>
    <div id="app">
        <v-app id="inspire">

            <v-navigation-drawer
                :src="!isDark ? '/images/day-menu.jpg' : '/images/night-menu.jpg'"
                v-model="drawer"
                dark
                app
            >
                <v-list-item two-line>
                    <v-list-item-avatar>
                        <img src="/images/alina.jpeg" alt="avatar">
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-title>Alina Anca</v-list-item-title>
                        <v-list-item-subtitle>Logged In</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>

                <v-divider></v-divider>

                <v-list
                    dense
                    nav
                >
                    <v-list-item
                        link
                        :href="this.getDrawer.pdsq"
                    >
                        <v-list-item-icon>
                            <v-icon>mdi-view-dashboard</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>PDSQ</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-navigation-drawer>

            <v-app-bar app>
                <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

                <v-toolbar-title>Application</v-toolbar-title>

                <v-spacer></v-spacer>

                <v-btn
                    class="mx-2"
                    fab
                    :dark="!isDark"
                    small
                    :color=" !isDark ? 'indigo darken-4' : 'amber lighten-1'"
                    @click="toggle_dark_mode"
                >
                    <v-icon dark>
                        ${ !isDark ? 'mdi-weather-night' : 'mdi-weather-sunset' }
                    </v-icon>
                </v-btn>
            </v-app-bar>

            <v-main>
                <v-container fluid pa-0>
                    @yield('content')
                </v-container>
            </v-main>
        </v-app>
    </div>
    <script src="{{ mix('js/app.js') }}"></script>
</body>
</html>
