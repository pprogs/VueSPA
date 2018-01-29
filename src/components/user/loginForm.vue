<template>
    <div>
        <v-layout>
            <v-flex xs12 sm6 offset-sm3>

                <v-form v-model="valid">
                <v-card>
                    <v-card-title primary-title>
                        <span class="headline">User Login</span>
                    </v-card-title>
                    <v-card-text>
                        <v-text-field 
                            v-model='inputLogin' 
                            label="User name" 
                            :rules="nameRules"
                            :disabled="isLoading"
                            required></v-text-field>

                        <v-text-field 
                            v-model="inputPassword" 
                            type="password" 
                            label="Password" 
                            :rules="passwordRules"
                            :disabled="isLoading"
                            required></v-text-field>
                    </v-card-text>

                    <v-card-actions>
                    <v-btn primary v-on:click="loadUser" :loading="isLoading">Login</v-btn>
                    <v-btn primary>Register</v-btn>
                    <v-btn primary>Forgot password</v-btn>
                    </v-card-actions>
   
                </v-card>
                </v-form>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
    import {AUTH_REQUEST} from '~/store/actions'

    export default {

        data: function() {
            return {
                valid:false,
                inputLogin : "",
                inputPassword : "",
                isLoading : false,

                nameRules: [
                    (v) => !!v || 'Name is required',
                    (v) => v.length <= 10 || 'Name must be less than 10 characters'
                ],

                passwordRules: [
                    (v) => !!v || 'Password is required',
                    (v) => v.length >= 3 || 'Password must be 3 or more characters',
                    (v) => v.length <= 50 || 'Password must be less than 50 characters'
                ]
            }
        },

        methods: {
            loadUser : function() {
                //const { inputLogin, inputPassword } = this
          
                this.isLoading = true

                const user = { login:this.inputLogin, pass:this.inputPassword }
                this.$store.dispatch(AUTH_REQUEST, user).then(() => {

                    
                    this.$router.push('/')
                })

                console.log(this.inputLogin)
                console.log(this.inputPassword)
                console.log(this.valid)
            }
        }
    }
</script>

<style scoped>

</style>