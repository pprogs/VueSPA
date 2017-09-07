<template>
    <div>
        <login-form></login-form>
    </div>
</template>

<script>

import Api from './../api/'
import LoginForm from './loginForm.vue'

export default {

        components: {
            'login-form': LoginForm
        },

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
</script>

<style scoped>
</style>