<template>
    <v-app>

  

        <v-toolbar app fixed clipped-left>
            <v-toolbar-title>{{title}}</v-toolbar-title>

            <v-spacer></v-spacer>
            <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn flat exact to="/">{{ $t('nav_b_index') }}</v-btn>
                <v-btn flat exact to="/game">{{ $t('nav_b_game') }}</v-btn>
                <v-btn flat v-if="isLogged" exact to="/about">{{ $t('nav_b_about') }}</v-btn>
                <v-btn flat exact to="/user">{{ $t('nav_b_user') }}</v-btn>
                <v-btn flat @click="changeLocale">{{ locale }}</v-btn>
            </v-toolbar-items>
        </v-toolbar>

        <v-content>
            <v-container fluid>
                <transition name="mfade" mode="out-in">>
                    <router-view></router-view>
                </transition>
            </v-container>
        </v-content>

        <v-footer app fixed cliped>

            <span>&copy; 2017</span>

        </v-footer>
    </v-app>
</template>

<script>

import { computed, methods } from './app'

export default {
    data: () => ({
        drawer: null
    }),
    computed,
    methods,
}

</script>

<style scoped>
.mfade-enter-active,
.mfade-leave-active {
    transition-property: opacity;
    transition-duration: 0.10s;
}

.mfade-enter-active {
    transition-delay: .10s;
}

.mfade-enter,
.mfade-leave-active {
    opacity: 0
}
</style>
