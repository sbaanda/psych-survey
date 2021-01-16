import Vue from 'vue'
import vuetify from "./plugins/vuetify";

import Survey from "./components/Survey"

const app = new Vue({
    vuetify,
    el: '#app',
    components: {
        Survey
    },
    data: () => ({
        drawer: true,
        isDark: false,
        fab: true
    }),
    mounted() {
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
