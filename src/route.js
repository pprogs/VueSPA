import Vue from 'vue'
import VueRouter from 'vue-router'

import Page404 from './components/404.vue'
import About from './components/about.vue' 

import UserRoutes from './routes/user.js'

Vue.use(VueRouter);

const routes = [
    { path: '/'},
    { path: '/about', component: About },
    ...UserRoutes,
    { path: '*', component: Page404 },
];

export default new VueRouter({
    mode: 'history',
    routes
});