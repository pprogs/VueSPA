<template>
    <div>
        <div>Index</div>
    </div>
</template>

<script>

    export default {
        mounted: function() {
            this.$store.commit('setTitle', 'title_index');
        },
    }
    
</script>

<style lang='styl'>
</style>