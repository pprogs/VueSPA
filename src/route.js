import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from './components/index.vue'
import Page404 from './components/404.vue'
import About from './components/about.vue'

import Game from './components/game/game.vue'

import UserRoutes from './routes/user.js'

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Index },
    { path: '/about', component: About },
    { path: '/game', component: Game },
    ...UserRoutes,
    { path: '*', component: Page404 },
];

export default new VueRouter({
    mode: 'history',
    routes
});