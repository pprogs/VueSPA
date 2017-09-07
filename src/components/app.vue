<template>
    <v-app>

        <v-toolbar>
            <v-toolbar-title>{{title}}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn flat exact to="/">Index</v-btn>
                <v-btn flat exact to="/about">About</v-btn>
                <v-btn flat exact to="/user/test">User</v-btn>
            </v-toolbar-items>
        </v-toolbar>

        <main>
            <v-container fluid>
                <transition name="fade" mode="out-in">
                    <router-view></router-view>
                </transition>
            </v-container>
        </main>
    </v-app>
</template>


<script src="./app"></script>