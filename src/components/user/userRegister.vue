<template>
    <div>
        <v-layout>
            <v-flex xs12 sm6 offset-sm3>

                <v-form v-model="isValid" @submit.prevent>
                <v-card>

                    <v-card-title primary-title>
                        <span class="headline">{{ $t('usr_reg') }}</span>
                    </v-card-title>

                    <v-card-text>
                        <v-text-field 
                            prepend-icon='person'
                            v-model='inputLogin' 
                            :label="$t('l_name')" 
                            :rules="nameRules"
                            :disabled="isLoading"
                            required></v-text-field>

                         <v-text-field 
                            prepend-icon='email'
                            v-model='inputEmail' 
                            :label="$t('l_email')"
                            :rules="emailRules"
                            :disabled="isLoading"
                            required></v-text-field>

                        <v-text-field 
                            prepend-icon='https'
                            v-model="inputPassword" 
                            type="password" 
                            :label="$t('l_pass')"
                            :rules="passwordRules"
                            :disabled="isLoading"
                            required></v-text-field>

                        <v-text-field 
                            prepend-icon='https'
                            v-model="confirmPassword" 
                            type="password" 
                            :label="$t('l_pass2')"
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
                            type = "submit"
                            :disabled = "!isValid">
                            {{ $t('usr_b_reg') }}
                        </v-btn>

                        <v-btn 
                            color = "primary"
                            to = "/user/login">
                            {{ $t('usr_b_areg') }}
                        </v-btn>
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

                nameRules : nameRules(this.$t),
                emailRules : emailRules(this.$t),
                passwordRules : passwordRules(this.$t),
            }
        },

        computed: {

            getErrorMessage : function() {
                return this.errorMessage;
            }
        },
    }
</script>

<style scoped>

</style>