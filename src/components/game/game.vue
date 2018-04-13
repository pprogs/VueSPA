<template>
    <div>
        <div>Let's play !!</div>
        <div>FPS : {{ getFPS }}</div>
    </div>
</template>

<script>

    import MainLoop from 'mainloop.js'

    export default {

         data: function() {
            return {
                currFPS : 0.0,
                updateFPSticker : 0,
                mainLoop : MainLoop,
            }
        },

        mounted() {

            console.log('game mounted');

            this.mainLoop.setUpdate(this.gameUpdated).setDraw(this.gameDraw).start();

            this.$store.commit('setTitle', 'title_game');
        },

        computed : {
            getFPS() {
                return this.currFPS;
            },
        },

        beforeDestroy() {
            console.log('game before destroy');

            this.mainLoop.stop();
        },

        methods : {
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

<style lang='styl'>
</style>