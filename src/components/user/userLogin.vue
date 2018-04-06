<template>
    <div>
        <v-layout>
            <v-flex xs12 sm6 offset-sm3>

                <v-form v-model="isValid">
                <v-card>

                    <v-card-title primary-title>
                        <span class="headline">User Login</span>
                    </v-card-title>

                    <v-card-text>
                        <v-text-field 
                            prepend-icon="person"
                            v-model='inputLogin' 
                            label="User name" 
                            :rules="nameRules"
                            :disabled="isLoading"
                            required></v-text-field>

                        <v-text-field 
                            prepend-icon="https"
                            v-model="inputPassword" 
                            type="password" 
                            label="Password" 
                            :rules="passwordRules"
                            :disabled="isLoading"
                            required></v-text-field>

                        <v-alert 
                            color="error" 
                            icon="warning" 
                            transition="scale-transition"
                            :value="isError">
                            {{getErrorMessage}}
                        </v-alert>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn                         
                            color = "primary"
                            @click = "loginUser" 
                            :loading = "isLoading"
                            :disabled = "!isValid">
                            Login
                        </v-btn>

                        <v-btn 
                            color = "primary"
                            to = "/user/register">
                            Register
                        </v-btn>

                        <v-btn 
                            color = "primary"
                            to="/user/recovery">
                            Forgot password
                        </v-btn>
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
                isValid : false,
                inputLogin : "",
                inputPassword : "",
                isLoading : false,
                isError : false,
                errorMessage : "",

                nameRules: [
                    (v) => !!v || 'Name is required',
                    (v) => v.length <= 10 || 'Name must be less than 10 characters'
                ],
                emailRules: [
                    (v) => !!v || 'E-mail is required',
                    (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
                ],
                passwordRules: [
                    (v) => !!v || 'Password is required',
                    (v) => v.length >= 3 || 'Password must be 3 or more characters',
                    (v) => v.length <= 50 || 'Password must be less than 50 characters'
                ]
            }
        },

        computed: {

            getErrorMessage : function() {
                return this.errorMessage
            }
        },


        methods: {
            loginUser : function() {           
                          
                this.isLoading = true                               

                const user = {
                    "UserName" : this.inputLogin,
                    "Password": this.inputPassword
                }
                      
                this.$store.dispatch(AUTH_REQUEST, user)
                .then((resp) => {   

                    this.isError = false
                    this.isLoading = false

                    this.$router.push('/')
                
                })
                .catch((resp) => {

                    this.isLoading = false
                    this.isError = true
                   
                    this.errorMessage = resp        
                })
            }
        }
    }
</script>

<style scoped>

</style>