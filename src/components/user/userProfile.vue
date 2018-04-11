<template>
    <div>
        <v-layout>
            <v-flex xs12 sm6 offset-sm3>

                <v-form v-model="isValid">
                <v-card>

                    <v-card-title primary-title>
                        <span class="headline">Profile</span>
                    </v-card-title>

                    is logged in : {{ isLoggedIn }}

                    <v-card-actions>     
                            <v-btn 
                            @click = "logoutUser" 
                            color = "primary">
                            {{ $t('usr_b_logout') }}
                        </v-btn>        
                    </v-card-actions>
   
                </v-card>
                </v-form>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>

    import Store from '~/store'

    export default {

        data: function() {
            return {
                isValid : false,
            }
        },

        computed: {

            isLoggedIn() {
                return this.$store.getters.isAuthenticated
            },
        },


        methods: {  

            logoutUser() {
                this.$store.dispatch('AUTH_LOGOUT');
                this.$router.push('/user');
            }         
        },

        beforeRouteEnter (to, from, next) {
            if (!Store.getters.isAuthenticated) {
                next('/user/login');
            } else
                next();
        },        
    };
</script>

<style scoped>
</style>