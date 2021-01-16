<template>
    <div>
        <h3>Survey {{ survey.name }}</h3>
        <p>{{ survey.description }}</p>
        <div class="row pa-2">
            <v-btn
                class="primary"
                @click="startSurvey"
            >
                Start survey
            </v-btn>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Survey',
    props: {
      survey: {
          type: Object,
          default: {}
      }
    },
    methods: {
        startSurvey() {
            console.log('start survey')
        }
    }
}
</script>

<style scoped>

</style>
