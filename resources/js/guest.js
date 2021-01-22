import Vue from 'vue'
import axios from 'axios'
import vuetify from "./plugins/vuetify"

Vue.component('register', () => import('./components/Register.vue'))
Vue.component('login', () => import('./components/Login.vue'))

//Vue.use(axios, {data: window.axios})
Vue.prototype.$axios = axios

require('./bootstrap')

Promise.all([]).then(([labels, i18n]) => {
    const guest = new Vue({
        vuetify,
        el: '#guest',
        delimiters: ['${', '}'],
        data: () => ({}),
        mounted() {
            this.$vuetify.theme.dark = false
        }
    })
})
