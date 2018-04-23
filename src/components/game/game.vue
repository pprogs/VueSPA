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


import Game from '~/game'

export default {

    data: function() {
        return {
            currFPS: 0.0,
            updateFPSticker: 0,
            game : undefined,
            menuActive: false,
            items: [
                { title: 'game_m_res', icon: 'dashboard', path: '/game/res' },
                { title: 'game_m_stats', icon: 'question_answer', path: '/game/stats' }
            ],

        }
    },

    mounted() {

        console.log('game mounted');

        this.game = new Game();
        this.game.start();

        
        this.$store.commit('setTitle', 'title_game');
        this.menuActive = true;
    },

    computed: {
        curFPS() {
            return this.currFPS;
        },
    },

    beforeDestroy() {
        console.log('game before destroy');

        this.game.stop();
    },

    methods: {
        gameUpdated(delta) {
            this.updateFPSticker += delta;
            if (this.updateFPSticker >= 1000) {
                this.currFPS = this.mainLoop.getFPS();
                this.updateFPSticker -= 1000;
            }
        },

        gameDraw() {

        },
    }
}

</script>

<style scoped>
  .mfade-enter-active, .mfade-leave-active {
    transition-property: opacity;
    transition-duration: 0.05s;
  }
  .mfade-enter-active {
    transition-delay: .05s;
  }
  .mfade-enter, .mfade-leave-active {
    opacity: 0
  }
</style>