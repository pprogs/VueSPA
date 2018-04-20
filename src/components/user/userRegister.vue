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
                            <v-text-field prepend-icon='person' v-model='inputLogin' :label="$t('l_name')" :rules="nameRules" :disabled="isLoading" :append-icon="loginChecking ? 'fas fa-circle-notch fa-spin' : ''" @input="onInputLogin" required>
                            </v-text-field>

                            <v-text-field prepend-icon='email' v-model='inputEmail' :label="$t('l_email')" :rules="emailRules" :disabled="isLoading" required></v-text-field>

                            <v-text-field prepend-icon='https' v-model="inputPassword" type="password" :label="$t('l_pass')" :rules="passwordRules" :disabled="isLoading" required></v-text-field>

                            <v-text-field prepend-icon='https' v-model="confirmPassword" type="password" :label="$t('l_pass2')" :rules="passwordRules" :disabled="isLoading" required></v-text-field>

                            <v-alert color="error" icon="warning" transition="scale-transition" :value="isError">
                                {{getErrorMessage}}
                            </v-alert>
                        </v-card-text>

                        <v-card-actions>
                            <v-btn color="primary" type="submit" @click="onRegister" :disabled="!isValid">
                                {{ $t('usr_b_reg') }}
                            </v-btn>

                            <v-btn color="primary" to="/user/login">
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

import { USER_REGISTER } from '~/store/actions'
import { nameRules, emailRules, passwordRules } from '~/api/validateRules.js';

export default {
    data: function() {
        return {
            isValid: false,
            inputLogin: "",
            inputPassword: "",
            confirmPassword: '',
            inputEmail: '',
            isLoading: false,
            isError: false,
            errorMessage: "",

            loginChecking: false,
            loginChecked: undefined,
            checkingTimerId: undefined,

            nameRules: nameRules(this.$t),
            emailRules: emailRules(this.$t),
            passwordRules: passwordRules(this.$t),
        }
    },

    methods: {
        onRegister() {

            let user = {
                "Login": this.inputLogin,
                "Password": this.inputPassword,
                "ConfirmPassword": this.confirmPassword,
                "Email": this.inputEmail,
            }

            this.$store.dispatch(USER_REGISTER, user)
                .then((resp) => {

                })
                .catch((err) => {

                })
                .finally(() => {

                });
        },

        onInputLogin(e) {
            if (this.checkingTimerId) {
                clearTimeout(this.checkingTimerId);
                this.checkingTimerId = undefined;
            }

            if (this.inputLogin && this.inputLogin.length > 3) {
                this.checkingTimerId = setTimeout(this.checkInputLogin, 1000)
            }
        },

        checkInputLogin() {
            let delay = (time) => (result) => new Promise(resolve => setTimeout(() => resolve(result), time));

            this.loginChecking = true;

            console.log('Im checking login... 1')
            Promise.resolve().then(delay(5000)).then(() => {

                console.log('Im checking login... 2')
                console.log(this);
            }).finally(() => {
                this.loginChecking = false;
            });
        }
    },

    computed: {

        getErrorMessage: function() {
            return this.errorMessage;
        }
    },
}
</script>

<style scoped>

</style>