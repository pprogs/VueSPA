<template>
    <div>
        <div class="my-test">It's about file</div>
    </div>
</template>

<script>
    export default {
        mounted: function() {
            this.$store.commit('setTitle','About')
        }
    }
</script>

<style lang='styl' src="./about.styl"></style>