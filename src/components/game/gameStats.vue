<template>
    <div>
        <div>Some stats</div>

        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <v-card>

                    <v-list dense>

                        <template v-for="r in resources">

                            <v-layout row :key="r.id" align-baseline>

                                <v-flex xs1 sm1 class="text-xs-center">
                                    <v-tooltip bottom close-delay="0" debounce="200" open-delay="1000">
                                        <v-icon slot="activator">info</v-icon>
                                        <span>
                                            <v-card>
                                                Tooltip
                                            </v-card>
                                        </span>
                                    </v-tooltip>
                                </v-flex>

                                <v-flex xs4 sm4>
                                    {{ $t(r.name) }}
                                </v-flex>

                                <v-flex xs4 sm4>
                                    {{ r.count }}
                                </v-flex>

                                <v-flex xs3 sm3>
                                    <v-btn small icon ripple @click="buyRes(r.id)">
                                        <v-icon color="grey lighten-1">file_download</v-icon>
                                    </v-btn>
                                    <v-btn small icon ripple>
                                        <v-icon color="grey lighten-1">file_upload</v-icon>
                                    </v-btn>
                                </v-flex>
                            </v-layout>
                        </template>

                    </v-list>

                </v-card>
            </v-flex>
        </v-layout>

    </div>
</template>

<script>

export default {

    methods: {
        buyRes(id) {
            console.log("buy res " + id);

            this.$store.state.game.game.buyResource(id, 1000);
        },
    },

    computed: {

        resources: function() {
            return this.$store.getters['game/resources'];
        }

    }
}

</script>

<style lang='styl' scoped>

</style>