<template>
    <div>
        <v-layout>
            <v-flex xs12 sm6 offset-sm3>

                <v-form v-model="isValid">
                <v-card>

                    <v-card-title primary-title>
                        <span class="headline">{{ $t('usr_rec')}}</span>
                    </v-card-title>

                    <v-card-text>
                        <v-text-field 
                            prepend-icon='email'
                            v-model='inputEmail' 
                            label="E-Mail" 
                            :rules="emailRules"
                            :disabled="isLoading"
                            required></v-text-field>
                    </v-card-text>

                    <v-card-actions>            
                        <v-btn 
                            color = "primary"
                            :disabled = "!isValid">
                            {{ $t('usr_b_recovery')}}
                        </v-btn>

                        <v-btn 
                            color = "primary"
                            to = "/user/login">
                            {{ $t('usr_b_remember') }}
                        </v-btn>
                    </v-card-actions>
   
                </v-card>
                </v-form>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>

    import { emailRules } from '~/api/validateRules.js';

    export default {

        data: function() {
            return {
                isValid : false,
                isLoading : false,
                inputEmail : '',
                emailRules : emailRules(this.$t),
            }
        },

        computed: {
        },


        methods: {           
        }
    };
</script>

<style scoped>
</style>