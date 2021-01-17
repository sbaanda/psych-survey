<template>
    <div>
        <h3>Survey {{ survey.name }}</h3>
        <p>{{ survey.description }}</p>
        <div class="row pa-2">
            <v-btn
                class="primary"
                href="/survey/pdsq/start"
            >
                Start survey
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
      }
    }
}
</script>

<style scoped>

</style>
