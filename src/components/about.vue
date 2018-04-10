<template>
    <div>
        <div class="my-test">It's about file</div>

 
    </div>
</template>

<script>

    export default {
        mounted: function() {
            this.$store.commit('setTitle', 'title_about');
        },
    }

</script>

<style lang='styl' src="./about.styl"></style>