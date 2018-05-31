<template>
    <div>


    <table class="datatable table theme--light" style="width : 100%">
        <thead>
            <th style="width : 60px"></th>
            <th style="width : *">Name</th>
            <th style="width : 100px">Amount</th>
            <th style="width : 30px"></th>
        </thead>
        <tbody>
     <template v-for="r in resources">
         <tr :key="r.id">
              <td><img :src="'/res/' + r.link.icon"></td>             
        <td>{{ $t(r.link.name) }}</td>
        <td class="text-xs-center">{{ $format(r.link.count) }} / 10K</td>
        <td><v-btn small icon ripple @click="buyRes(r.id)" class="ma-0">
                                        <v-tooltip bottom>
                                            <v-icon color="grey lighten-1" slot="activator">file_upload</v-icon>
                                            <span>Get 1 {{ $t(r.link.name) }}</span>
                                        </v-tooltip>
                                    </v-btn></td>
        </tr>
        
    </template>
        </tbody>
    </table>



    </div>
</template>

<script>

import { FormatNumber } from '~/utils'

export default {

    data: function() {
        return {
            game : null
        }
    },

    mounted() {
        this.game = this.$store.state.game.game;
        console.log("mounted");
    },

    methods: {
        buyRes(id) {
            this.game.buyResource(id, 1);
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

table {
    border-collapse: collapse;
}

table, th, td {
    border: 1px solid black;
} 

td {
    padding : 1px;
}

</style>