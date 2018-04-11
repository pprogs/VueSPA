import User from '~/components/user/user.vue'
import UserLogin from '~/components/user/userLogin.vue'
import UserRegister from '~/components/user/userRegister.vue'
import UserRecovery from '~/components/user/userRecovery.vue'
import UserProfile from '~/components/user/userProfile.vue'

export default [
    { 
        path: '/user', 
        component: User,
        children: [
            {
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
                path: 'profile',
                component: UserProfile                
            }, {
                path: ':id(\\d+)',
                component: UserProfile
            },
        ]
    }
];