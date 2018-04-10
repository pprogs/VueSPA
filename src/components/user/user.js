import Api from '~/api/'

export default {

        data: function() {
            return {
                userData : "userData",
                inputLogin : "",
                inputPassword : ""
            }
        },

        computed : {

        },

        mounted: function() {
            this.$store.commit('setTitle', 'l_user');
        },

        methods: {
            loadUser : function() {
                Api.getUser(5, resp => {
                    this.userData = resp
                })                
            }  
        }
}