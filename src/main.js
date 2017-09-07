import "babel-polyfill"

import Vue from 'vue'
import store from './store'
import router from './route'

import Vuetify from 'vuetify'
import './main.styl'

import App from './components/app.vue'

Vue.use(Vuetify)

var app = new Vue({
    el: '#app',
    store,  
    router,   
    render: h => h(App)
})


