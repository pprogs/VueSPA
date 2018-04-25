<template>
    <div>

        <v-layout row>
            <v-flex xs12 sm12 md10 offset-md1>
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

                                <v-flex xs4 sm6>
                                    {{ $t(r.link.name) }}
                                </v-flex>

                                <v-flex xs4 sm4>
                                    {{ format(r.link.count()) }}
                                </v-flex>

                                <v-flex xs3 sm1>
                                    <v-btn small icon ripple @click="buyRes(r.id)" class="ma-0">
                                        <v-tooltip bottom>
                                            <v-icon color="grey lighten-1" slot="activator">file_upload</v-icon>
                                            <span>Get 1 {{ $t(r.link.name) }}</span>
                                        </v-tooltip>
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

import { FormatNumber } from '~/utils'

export default {


    methods: {
        buyRes(id) {
            console.log("buy res " + id);

            this.$store.state.game.game.buyResource(id, 1000);
        },

        format(number) {
            return FormatNumber(number);
        }
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