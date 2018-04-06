<template>
    <div>
        <v-layout>
            <v-flex xs12 sm6 offset-sm3>

                <v-form v-model="isValid">
                <v-card>

                    <v-card-title primary-title>
                        <span class="headline">Register new user</span>
                    </v-card-title>

                    <v-card-text>
                        <v-text-field 
                            prepend-icon='person'
                            v-model='inputLogin' 
                            label="User name" 
                            :rules="nameRules"
                            :disabled="isLoading"
                            required></v-text-field>

                         <v-text-field 
                            prepend-icon='email'
                            v-model='inputEmail' 
                            label="E-Mail" 
                            :rules="emailRules"
                            :disabled="isLoading"
                            required></v-text-field>

                        <v-text-field 
                            prepend-icon='https'
                            v-model="inputPassword" 
                            type="password" 
                            label="Password" 
                            :rules="passwordRules"
                            :disabled="isLoading"
                            required></v-text-field>

                        <v-text-field 
                            prepend-icon='https'
                            v-model="confirmPassword" 
                            type="password" 
                            label="Confirm password" 
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
                        <v-btn color = "primary">Register</v-btn>
                        <v-btn color = "primary">Already registered</v-btn>
                    </v-card-actions>
   
                </v-card>
                </v-form>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>

    import { nameRules, emailRules, passwordRules } from '~/api/validateRules.js';

    export default {
        data: function() {
            return {
                isValid : false,
                inputLogin : "",
                inputPassword : "",
                confirmPassword : '',
                inputEmail : '',
                isLoading : false,
                isError : false,
                errorMessage : "",

                nameRules,
                emailRules,
                passwordRules,
            }
        },

        computed: {

            getErrorMessage : function() {
                return this.errorMessage
            }
        },
    }
</script>

<style scoped>

</style>