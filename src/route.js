import Vue from 'vue'
import VueRouter from 'vue-router'

import About from './components/about.vue' 

import User from './components/user/user.vue'
import UserLogin from './components/user/userLogin.vue'
import UserRegister from './components/user/userRegister.vue'
import UserRecovery from './components/user/userRecovery.vue'

Vue.use(VueRouter);

const routes = [
    { path: '/about', component: About },
    { 
        path: '/user', 
        component: User,
        children: [{
                path: '',
                component: UserLogin
            }, {
                path: 'login',
                component: UserLogin     
            }, {
                path: 'recovery',
                component: UserRecovery
            }, {                
                path: 'register',
                component: UserRegister
            }, {
                path: ':id',
                component: null
            }]
    },
]

export default new VueRouter({
    routes
})