<template>
    <v-container>
        <v-data-table
            :headers="headers"
            :items="usersList"
            :items-per-page="10"
            :loading="loading"
            loading-text="Loading... Please wait"
            class="elevation-1"
            @click:row="rowClick"
        >
            <template v-slot:item.actions="{ item }">
                <v-icon
                    small
                    class="mr-2"
                    @click="toChart(item)"
                >
                    mdi-chart-bar
                </v-icon>
            </template>
        </v-data-table>
    </v-container>
</template>

<script>
export default {
    name: 'SurveyPatients',
    props: {
        slug: {
            type: String,
            default: ''
        }
    },
    data () {
        return {
            headers: [
                {
                    text: 'Name',
                    align: 'start',
                    sortable: false,
                    value: 'name',
                },
                { text: 'Email', value: 'email' },
                { text: 'Actions', value: 'actions', sortable: false }
            ],
            usersList: [],
            loading: true
        }
    },
    created() {
        this.getPatients()
    },
    methods: {
        async getPatients() {
            const response = await this.$axios.get('/survey/' + this.slug + '/list')
            this.usersList = response.data.patients
            this.loading = false
        },

        rowClick(item) {
            console.log(item)
        },

        toChart(item) {
            window.location.href = window.location.origin + '/survey/' + this.slug + '/' + item.id
        }
    }
}
</script>

<style scoped>

</style>
