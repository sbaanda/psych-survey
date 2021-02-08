<template>
    <v-container>
        <v-card>
            <v-card-title>
                <v-btn
                    class="mx-2"
                    fab
                    dark
                    small
                    color="indigo"
                    href="/patients/edit/create"
                >
                    <v-icon dark medium>
                        mdi-plus
                    </v-icon>
                </v-btn>
                <v-spacer></v-spacer>
                <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Search"
                    outlined
                    hide-details
                    :dark="$vuetify.theme.isDark"
                ></v-text-field>
            </v-card-title>
            <v-data-table
                :headers="headers"
                :items="usersList"
                :items-per-page="10"
                :loading="loading"
                loading-text="Loading... Please wait"
                class="elevation-1"
                :search="search"
            >
                <template v-slot:item.actions="{ item }">
                    <v-icon
                        medium
                        class="mr-2"
                        @click="editPatient(item)"
                    >
                        mdi-account-edit
                    </v-icon>
                    <v-icon
                        medium
                        class="mr-2"
                        color="red"
                        @click="removePatient(item)"
                    >
                        mdi-delete
                    </v-icon>
                </template>
            </v-data-table>
        </v-card>
    </v-container>
</template>

<script>
export default {
    name: 'Patients',
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
                { text: 'Actions', value: 'actions', sortable: false, align: 'right' }
            ],
            usersList: [],
            search: '',
            loading: true
        }
    },
    created() {
        this.getPatients()
    },
    methods: {
        async getPatients() {
            const response = await this.$axios.get('/patients/list')
            this.usersList = []
            this.usersList = response.data.patients
            this.loading = false
        },
        async removePatient(item) {
            this.loading = true
            const response = await this.$axios.post('/patients/delete', {
                id: item.id
            })
            if (response.data.status === 'success') {
                await this.getPatients()
            }
        },
        editPatient(item) {
            window.location.href = window.location.origin + '/patients/edit/update/' + item.id
        }
    }
}
</script>

<style scoped>

</style>
