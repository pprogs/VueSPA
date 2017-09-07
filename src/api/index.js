import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

export default {

    resources : {
        user: Vue.resource('http://localhost:8081/api/user{/id}')
    },

    getUser(id, callback) {
        this.resources.user.get({ id }).then( 
            response => {
                callback(response.body)
            },
            response => {
                callback('error')
            }
        )
    }
}