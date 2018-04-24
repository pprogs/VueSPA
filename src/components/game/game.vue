<template>
    <div>

        <v-navigation-drawer width="200" clipped permanent app>

            <v-list dense class="pt-5">
                <v-list-tile v-for="item in items" :key="item.title" :to="item.path">
                    <v-list-tile-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>{{ $t(item.title) }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>

        </v-navigation-drawer>

        <transition name="mfade" mode="out-in">>
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>

export default {

    data: function() {
        return {
            items: [
                { title: 'game_m_res', icon: 'brightness_5', path: '/game/res' },
                { title: 'game_m_stats', icon: 'assignment', path: '/game/stats' }
            ],
        }
    },

    mounted() {
        this.$store.commit('setTitle', 'title_game');

        this.$store.state.game.game.start();        
    },

    computed: {
    },

    beforeDestroy() {
        this.$store.state.game.game.stop();
    },

    methods: {
    }
}

</script>

<style scoped>
.mfade-enter-active,
.mfade-leave-active {
    transition-property: opacity;
    transition-duration: 0.05s;
}

.mfade-enter-active {
    transition-delay: .05s;
}

.mfade-enter,
.mfade-leave-active {
    opacity: 0
}
</style>