<template>
    <div>
        <v-card-text>
            <v-text-field
                name="nume"
                label="Nume"
                placeholder="Placeholder"
                outlined
                :error-messages="this.errors.nume"
                :rules="rules.nume"
            ></v-text-field>
            <v-text-field
                name="email"
                label="Email"
                placeholder="Placeholder"
                outlined
                :error-messages="this.errors.email"
                :rules="rules.email"
            ></v-text-field>
            <v-text-field
                name="parola"
                label="Parola"
                placeholder="Placeholder"
                outlined
                type="password"
                :error-messages="this.errors.parola"
                :rules="rules.parola"
            ></v-text-field>
        </v-card-text>
        <v-card-actions class="justify-center pt-0">
            <v-btn
                color="primary"
                class="col-12"
                type="submit"
            >
                Inregistrare
            </v-btn>
        </v-card-actions>
    </div>
</template>

<script>
export default {
    name: 'Register',
    props: {
        errors: {}
    },
    data() {
        return {
            rules: {
                nume: [
                    value => !!value || 'Câmpul nume este obligatoriu.',
                    value => (value && value.length >= 3) || 'Minim 3 caractere.',
                ],
                email: [
                    value => !!value || 'Câmpul email este obligatoriu.',
                    (val) => /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(val).toLowerCase()) || "Adresa de email nu este validă."
                ],
                parola: [
                    value => !!value || 'Câmpul parola este obligatoriu.',
                    value => (value && value.length >= 8) || 'Minim 8 caractere.',
                ]
            }
        }
    }
}
</script>

<style scoped>

</style>
