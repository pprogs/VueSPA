<template>
    <div>
        <div class="my-test">It's about file</div>

 
    </div>
</template>

<script>

    import Game from '../game/'

    let game = new Game(null);


    export default {
        mounted: function() {
            this.$store.commit('setTitle',game.getTitle())
        }
    }
</script>

<style lang='styl' src="./about.styl"></style>