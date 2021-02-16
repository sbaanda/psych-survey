<template>
    <div>
        <h3>Survey {{ survey.name }}</h3>
        <p>{{ survey.description }}</p>
        <div class="row pa-2">
            <v-btn
                class="primary"
                href="/survey/pdsq/start"
            >
                {{ result === null ? 'Start Survey' : 'Restart Survey' }}
            </v-btn>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SurveyDescription',
    props: {
        survey: {
          type: Object,
          default: {}
        },
        result: {
            type: Object,
            default: {}
        }
    },
    mounted() {
        console.log(this.result)
    }
}
</script>

<style scoped>

</style>
