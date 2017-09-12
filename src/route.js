import Vue from 'vue'
import VueRouter from 'vue-router'


import About from './components/about.vue' 
import User from './components/user/user.vue'

Vue.use(VueRouter);

const routes = [
    { path: '/about', component: About },
    { path: '/user/:id', component: User },

]

export default new VueRouter({
    routes
})