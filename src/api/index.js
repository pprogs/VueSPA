import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);
Vue.http.headers.common['Access-Control-Allow-Origin'] = '*'

export default {

    resources : {
        userInfo: Vue.resource('http://localhost:8081/api/user{/id}'),
        userAuth: Vue.resource('http://localhost:8081/api/auth')
    },

    getUserInfo(id) {
        console.log("getUserInfo")
        return this.resources.userInfo.get({ id })        
    },

    authUser(user) {
        console.log("authUser")
        return this.resources.userAuth.get( user )
    }
}