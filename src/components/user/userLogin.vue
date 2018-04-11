<template>
    <div>
        <v-layout>
            <v-flex xs12 sm6 offset-sm3>

                <v-form v-model="isValid">
                <v-card>

                    <v-card-title primary-title>
                        <span class="headline">{{ $t('usr_login') }}</span>
                    </v-card-title>

                    <v-card-text>
                        <v-text-field 
                            prepend-icon="person"
                            v-model='inputLogin' 
                            :label= "$t('l_name')"
                            :rules="nameRules"
                            :disabled="isLoading"
                            required></v-text-field>

                        <v-text-field 
                            prepend-icon="https"
                            v-model="inputPassword" 
                            type="password" 
                            :label= "$t('l_pass')"
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
                            {{ $t('usr_login') }}
                        </v-btn>

                        <v-btn 
                            color = "primary"
                            to = "/user/register">
                            {{ $t('usr_b_reg') }}
                        </v-btn>

                        <v-btn 
                            color = "primary"
                            to="/user/recovery">
                            {{ $t('usr_b_forgot') }}
                        </v-btn>
                    </v-card-actions>
   
                </v-card>
                </v-form>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
    import { AUTH_REQUEST } from '~/store/actions'
    import { nameRules, passwordRules } from '~/api/validateRules.js';

    export default {

        data: function() {
            return {
                isValid : false,
                inputLogin : "",
                inputPassword : "",
                isLoading : false,
                isError : false,
                errorMessage : "",

                nameRules : nameRules(this.$t),
                passwordRules : passwordRules(this.$t),
            }
        },

        computed: {

            getErrorMessage : function() {
                return this.errorMessage
            }
        },


        methods: {
            loginUser : function() {           
                          
                this.isLoading = true;  
                this.isError = false;                             

                const user = {
                    "UserName" : this.inputLogin,
                    "Password": this.inputPassword
                }
                      
                this.$store
                .dispatch(AUTH_REQUEST, user)
                .then((resp) => {   

                    this.isError = false                    
                    this.$router.push('/user/profile')                
                })
                .catch((resp) => {
                   
                    this.errorMessage = this.$t( 'api_' + resp);
                    this.isError = true;                    
                })
                .finally(() => {

                     this.isLoading = false
                     console.log('auth finally')
                });
            }
        }
    }
</script>

<style scoped>

</style>