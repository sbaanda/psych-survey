<template>
    <v-row>
        <v-col cols="10" offset="1">
            <v-card class="mt-5">
                <horizontal-bar-chart
                    :barLabels="result.barLabels"
                    :barDatasets="result.barDatasets"
                ></horizontal-bar-chart>
            </v-card>
        </v-col>
        <v-col cols="10" offset="1">
            <v-card class="mb-5">
                <v-data-table
                    :headers="headers"
                    :items="result.datatable"
                    :items-per-page="15"
                    item-key="name"
                    sort-by="name"
                    group-by="item"
                    class="elevation-1"
                    show-group-by
                >
                    <template v-slot:group.header="{ group, headers, toggle, isOpen }">
                        <td :colspan="headers.length">
                            <span class="mx-5 font-weight-bold">{{ typeof group === 'boolean' ? group ? 'Da' : 'Nu' : group }}</span>
                        </td>
                    </template>

                    <template v-slot:item="{ item }">
                        <tr>
                            <td>{{ item.name }}</td>
                            <td class="text-center">
                                <v-chip
                                    :color="item.answer ? 'green' : 'red'"
                                    dark
                                >
                                    {{ item.answer ? 'Da' : 'Nu' }}
                                </v-chip>
                            </td>
                        </tr>
                    </template>
                </v-data-table>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
import HorizontalBarChart from "./HorizontalBarChart";

export default {
    name: 'SurveyResult',
    props: {
        result: {
            type: Object,
            default: {}
        }
    },
    components: {
        HorizontalBarChart
    },
    data () {
        return {
            headers: [
                {
                    text: 'Intrebare',
                    align: 'start',
                    value: 'name',
                    groupable: false,
                },
                { text: 'Item', value: 'item', align: 'center' },
                { text: 'Raspuns', value: 'answer', align: 'center' },
            ],
            desserts: [
                {
                    name: 'Frozen Yogurt',
                    category: 'Ice cream',
                    dairy: 'Yes',
                },
                {
                    name: 'Ice cream sandwich',
                    category: 'Ice cream',
                    dairy: 'Yes',
                },
                {
                    name: 'Eclair',
                    category: 'Cookie',
                    dairy: 'Yes',
                },
                {
                    name: 'Gingerbread',
                    category: 'Cookie',
                    dairy: 'No',
                },
            ],
        }
    },
    mounted() {
        console.log(this.result)
    }
}
</script>

<style>

</style>
