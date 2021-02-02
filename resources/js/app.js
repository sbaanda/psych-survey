import Vue from 'vue'
import axios from 'axios'
import vuetify from "./plugins/vuetify"

Vue.component('survey', () => import('./components/Survey.vue'))
Vue.component('register', () => import('./components/Register.vue'))
Vue.component('survey-description', () => import('./components/SurveyDescription.vue'))

Vue.prototype.$axios = axios

require('./bootstrap')

Promise.all([]).then(([labels, i18n]) => {
    const app = new Vue({
        vuetify,
        el: '#app',
        delimiters: ['${', '}'],
        data: () => ({
            user: window.App.user,
            isDoctor: window.App.isDoctor,
            isPatient: window.App.isPatient,
            drawer: true,
            isDark: false,
            fab: true
        }),
        computed: {
            loggedIn() {
                return !!this.user
            },
            getDrawer() {
                return {
                    pdsq: this.isDoctor ? '/survey/pdsq/users' : '/survey/pdsq'
                }
            }
        },
        mounted() {
            console.log(this.isDoctor)
            const theme = localStorage.getItem("dark_theme");
            if (theme) {
                this.isDark = theme === "true"
                this.$vuetify.theme.dark = theme === "true"
            } else if (
                window.matchMedia &&
                window.matchMedia("(prefers-color-scheme: dark)").matches
            ) {
                this.$vuetify.theme.dark = true;
                localStorage.setItem(
                    "dark_theme",
                    this.$vuetify.theme.dark.toString()
                );
            }
        },
        methods: {
            toggle_dark_mode: function() {
                this.$vuetify.theme.dark = !this.$vuetify.theme.dark
                this.isDark = this.$vuetify.theme.dark
                localStorage.setItem("dark_theme", this.$vuetify.theme.dark.toString())
            },

            getViewFrontUrl(slug) {

            }
        }
    })
})
