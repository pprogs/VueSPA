<template>
    <div>
        <v-layout>
            <v-flex xs12 sm6 offset-sm3>
                <v-card>
                    <v-card-title primary-title>
                        <span class="headline">User Login</span>
                    </v-card-title>
                    <v-card-text>
                        <v-text-field v-model='inputLogin' label="User name"></v-text-field>
                        <v-text-field v-model="inputPassword" type="password" label="Password"></v-text-field>
                    </v-card-text>

                    <v-card-actions>
                    <v-btn primary v-on:click="loadUser">Login</v-btn>
                    <v-btn primary>Register</v-btn>
                    <v-btn primary>Forgot password</v-btn>
                    </v-card-actions>
   
                </v-card>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                inputLogin : "",
                inputPassword : ""
            }
        },

        methods: {
            loadUser : function() {
                
            }
        }
    }
</script>

<style scoped>

</style>