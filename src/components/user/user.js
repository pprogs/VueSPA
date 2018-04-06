import Api from '~/api/'

export default {

        data: function() {
            return {
                userData : "userData",
                inputLogin : "",
                inputPassword : ""
            }
        },

        mounted: function() {
            this.$store.commit('setTitle','User')
        },

        methods: {
            loadUser : function() {
                Api.getUser(5, resp => {
                    this.userData = resp
                })                
            }  
        }
}