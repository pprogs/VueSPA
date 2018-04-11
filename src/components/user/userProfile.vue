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
                    </v-card-actions>
   
                </v-card>
                </v-form>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>

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
        }
    };
</script>

<style scoped>
</style>