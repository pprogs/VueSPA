<template>
    <v-app>
        <v-toolbar>
            <v-toolbar-title>{{title}}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn flat exact to="/">Index</v-btn>
                <v-btn flat exact to="/about">About</v-btn>
                <v-btn flat exact to="/user">User</v-btn>
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
    </v-app>
</template>

<script>

    import {computed, methods} from './app'

    export default {
        computed,
        methods,
    }

</script>

<style scoped>
  .mfade-enter-active, .mfade-leave-active {
    transition-property: opacity;
    transition-duration: 0.10s;
  }
  .mfade-enter-active {
    transition-delay: .10s;
  }
  .mfade-enter, .mfade-leave-active {
    opacity: 0
  }
</style>
