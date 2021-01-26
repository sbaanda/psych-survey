<template>
    <v-container fluid>
        <div v-if="surveyList">
            <div
                v-for="question in surveyList.questions" :key="question.no"
                :id="'q_' + question.no"
                :class="setClass(question)"
                class="q"
            >
                <v-row>
                    <v-col v-if="question.no !== 1" cols="12">
                        <v-row class="pa-4 text-center">
                            <v-col
                                cols="2"
                                offset="1"
                            >
                                <v-btn
                                    class="ma-4"
                                    outlined
                                    fab
                                    color="indigo"
                                    x-large
                                    @click="back(question)"
                                >
                                    <v-icon>
                                        mdi-arrow-left
                                    </v-icon>
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col cols="12">
                        <v-row class="pa-4 text-center">
                            <v-col
                                cols="8"
                                offset="2"
                            >
                                <h3>{{ question.name }}</h3>
                            </v-col>
                        </v-row>
                        <v-row class="pa-4 text-center">
                            <v-col
                                cols="6"
                            >
                                <v-btn
                                    class="ma-4"
                                    outlined
                                    color="indigo"
                                    x-large
                                    @click="slide(true, question)"
                                >Da</v-btn>
                            </v-col>
                            <v-col
                                cols="6"
                            >
                                <v-btn
                                    class="ma-4"
                                    outlined
                                    color="indigo"
                                    x-large
                                    @click="slide(false, question)"
                                >Nu</v-btn>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </div>
        </div>
    </v-container>
</template>

<script>
export default {
    name: 'Survey',
    props: {
        survey: {
            type: Object,
            default: {}
        },
        complete: {
            type: Object,
            default: {}
        }
    },
    data() {
        return {
            next: 1,
            surveyList: false,
            finished: false
        }
    },
    created() {
        if (this.complete.status === 'incomplete') {
            this.next = this.complete.results.length + 1
        }
        this.getSurvey()
    },
    methods: {
        async getSurvey() {
            const response = await this.$axios.get('/survey/' + this.survey.name + '/get')
            this.surveyList = response.data.survey
        },
        setClass(question) {
            const lastResult = this.complete.results[(this.complete.results.length - 1)]
            let slideClass = ''

            if(question.no === 1) {
                slideClass += 'toSlide'
            } else {
                slideClass += 'nextSlide'
            }

            if(this.complete.status === 'incomplete') {
                if(question.no < lastResult.no) {
                    slideClass += ' onSliding'
                } else if(question.no === lastResult.no) {
                    slideClass += ' onSliding'
                } else if((question.no - lastResult.no) === 1) {
                    slideClass += ' nextSliding'
                }
            }

            return slideClass
        },
        slide(value, question) {
            this.$axios.post('/survey/' + this.survey.name + '/result', {
                complete_id: this.complete.id,
                item_id: question.item_id,
                no: question.no,
                value: JSON.stringify({ choice: value })
            }).then(response => {
                if(response.data.status === 'success') {
                    if (this.next === this.surveyList.questions.length) {
                        window.location.href = window.location.origin + '/survey/' + this.survey.name
                    } else {
                        const el = document.getElementById("q_" + this.next)
                        const nextEl = document.getElementById("q_" + (this.next + 1))

                        el.classList.remove("onSlidingReverse")
                        el.classList.remove('nextSliding')
                        el.classList.add("onSliding")

                        nextEl.classList.remove("onSlidingReverse")
                        nextEl.classList.remove("nextSlidingReverse")
                        nextEl.classList.add("nextSliding")

                        this.next++
                    }
                }
            })
        },
        back(question) {
            this.$axios.post('/survey/' + this.survey.name + '/result/remove', {
                complete_id: this.complete.id,
                no: (question.no - 1),
            }).then(response => {
                if(response.data.status === 'success') {
                    const el = document.getElementById("q_" + (this.next - 1))
                    const nextEl = document.getElementById("q_" + this.next)

                    el.classList.remove("onSlidingReverse")
                    el.classList.remove("onSlidingReverse")
                    el.classList.remove("onSliding")

                    nextEl.classList.remove("nextSlidingReverse")
                    nextEl.classList.remove("nextSlidingReverse")
                    nextEl.classList.remove("nextSliding")

                    el.classList.add("onSlidingReverse")
                    nextEl.classList.add("nextSlidingReverse")

                    if (this.next > 1) {
                        this.next--
                    }
                }
            })
        }
    }
}
</script>

<style scoped>
    .container {
        background-color: crimson;
        min-height: calc(93vh + 2px);
        position: relative;
        overflow: hidden;
    }
    .q { background: lightsalmon; }
    .q_1 { background: lightsalmon; }
    .q_2 { background: darkseagreen; }
    .q_3 { background: lightslategrey; }
    .q_4 { background: coral; }
    .toSlide {
        width: 90%;
        min-height: 90%;

        display: flex;
        justify-content: center;
        align-items: center;

        /* position the div in center */
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .nextSlide {
        width: 90%;
        min-height: 90%;

        display: flex;
        justify-content: center;
        align-items: center;

        /* position the div in center */
        position: absolute;
        top: 150%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .onSliding{
        animation-name: onSlide;
        animation-duration: .6s;
        animation-fill-mode: forwards;
    }
    .nextSliding{
        animation-name: nextSlide;
        animation-duration: .6s;
        animation-fill-mode: forwards;
    }
    .onSlidingReverse{
        animation-name: onSlideReverse;
        animation-duration: .6s;
        animation-fill-mode: forwards;
    }
    .nextSlidingReverse{
        animation-name: nextSlideReverse;
        animation-duration: .6s;
        animation-fill-mode: forwards;
    }
    @keyframes onSlide {
        from {top: 50%;}
        to {top: -50%; bottom: initial; background-color: crimson;}
    }
    @keyframes nextSlide {
        from {top: 150%; background-color: blue;}
        to {top: 50%;}
    }
    @keyframes onSlideReverse {
        from {top: -50%; bottom: initial; background-color: crimson;}
        to {top: 50%;}
    }
    @keyframes nextSlideReverse {
        from {top: 50%;}
        to {top: 150%; background-color: crimson;}
    }
</style>
