<template>
    <v-row>
        <v-col cols="8" offset="2">
            <v-card class="mt-5">
                <v-card-text>
                    <v-text-field
                        name="name"
                        label="Nume"
                        placeholder="Placeholder"
                        outlined
                        :error-messages="errors.name"
                        :rules="rules.name"
                        v-model="form.name"
                    ></v-text-field>
                    <v-text-field
                        name="email"
                        label="Email"
                        placeholder="Placeholder"
                        outlined
                        :error-messages="errors.email"
                        :rules="rules.email"
                        v-model="form.email"
                    ></v-text-field>
                    <v-text-field
                        name="password"
                        label="Parola"
                        placeholder="Placeholder"
                        outlined
                        type="password"
                        :error-messages="errors.password"
                        :rules="rules.password"
                        v-model="form.password"
                    ></v-text-field>
                </v-card-text>
                <v-card-actions class="justify-center pt-0">
                    <v-btn
                        color="primary"
                        class="col-12"
                        type="submit"
                        @click="submit"
                    >
                        {{ type === 'create' ? 'Creare' : 'Editare' }}
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: 'Patient',
    props: {
        errors: {},
        type: {
            type: String,
            default: ''
        },
        user: {}
    },
    data() {
        return {
            form: {
                id: '',
                name: '',
                email: '',
                password: ''
            },
            rules: {
                name: [
                    value => !!value || 'Câmpul name este obligatoriu.',
                ],
                email: [
                    value => !!value || 'Câmpul email este obligatoriu.',
                    (val) => /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(val).toLowerCase()) || "Adresa de email nu este validă."
                ],
                password: [
                    value => !!value || 'Câmpul password este obligatoriu.',
                    value => (value && value.length >= 8) || 'Minim 8 caractere.',
                ]
            }
        }
    },
    mounted() {
        console.log(this.type, this.user)
        if (this.user !== null) {
            const data = {
                id: this.user.id,
                name: this.user.name,
                email: this.user.email
            }
            this.$data.form = data
        }
    },
    methods: {
        submit() {
            if (this.type === 'create') {
                this.$axios.post('/patients/' + this.type, this.form)
                    .then(function (response) {
                        if (response.data.status === 'success') {
                            window.location.href = window.location.origin + '/patients'
                        }
                    })
            } else {
                this.$axios.put('/patients/' + this.type + '/' + this.form.id, this.form)
                    .then(function (response) {
                        if (response.data.status === 'success') {
                            window.location.href = window.location.origin + '/patients'
                        }
                    })
            }
        }
    }
}
</script>

<style scoped>

</style>
