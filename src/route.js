import Vue from 'vue'
import VueRouter from 'vue-router'

import About from './components/about.vue' 

import UserRoutes from './routes/user.js'

Vue.use(VueRouter);

const routes = [
    { path: '/about', component: About },
    ...UserRoutes,
];

export default new VueRouter({
    mode: 'history',
    routes
});