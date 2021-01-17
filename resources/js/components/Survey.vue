<template>
    <v-container fluid>
        <div class="toSlide q_1">
            <v-col cols="12">
                <v-row class="pa-4 text-center">
                    <v-col
                        cols="8"
                        offset="2"
                    >
                        <h3>V-aţi simţit trist(ă) sau deprimat(ă)?</h3>
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
                            @click="first"
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
                            @click="first"
                        >Nu</v-btn>
                    </v-col>
                </v-row>
            </v-col>
        </div>
        <div class="nextSlide q_2">
            <v-row>
                <v-col cols="12">
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
                                @click="back"
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
                            <h3>V-aţi simţit trist(ă) sau deprimat(ă) în cea mai mare parte a zilei, aproape în fiecare zi?</h3>
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
                                @click="second"
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
                                @click="second"
                            >Nu</v-btn>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </div>
        <div class="nextSlide q_3">
            <v-row>
                <v-col cols="12">
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
                                @click="back"
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
                            <h3>V-aţi bucurat mai puţin de aproape toate lucrurile care înainte, în mod normal, vă făceau plăcere?</h3>
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
                                @click="second"
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
                                @click="second"
                            >Nu</v-btn>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </div>
        <div class="nextSlide q_4">
            <v-row>
                <v-col cols="12">
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
                                @click="back"
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
                            <h3>V-aţi pierdut interesul pentru aproape toate activităţile de care, în mod normal, eraţi interesat(ă)?</h3>
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
                                @click="second"
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
                                @click="second"
                            >Nu</v-btn>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
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
        }
    },
    data() {
        return {
            next: 2
        }
    },
    methods: {
        first() {
            const firstEl = document.getElementsByClassName("q_1")
            const secondEl = document.getElementsByClassName("q_2")

            if (firstEl[0].classList.contains("onSlidingReverse")) {
                firstEl[0].classList.remove("onSlidingReverse")
            }

            if (secondEl[0].classList.contains("nextSlidingReverse")) {
                secondEl[0].classList.remove("nextSlidingReverse")
            }

            firstEl[0].classList.add("onSliding")
            secondEl[0].classList.add("nextSliding")
        },
        second() {
            const el = document.getElementsByClassName("q_" + this.next)
            const nextEl = document.getElementsByClassName("q_" + (this.next + 1))

            if (el[0].classList.contains("onSlidingReverse")) {
                el[0].classList.remove("onSlidingReverse")
            }

            if (nextEl[0].classList.contains("nextSlidingReverse")) {
                nextEl[0].classList.remove("nextSlidingReverse")
            }

            el[0].classList.remove('nextSliding')
            el[0].classList.add("onSliding")

            nextEl[0].classList.add("nextSliding")

            this.next++
        },
        back() {
            const firstEl = document.getElementsByClassName("q_" + (this.next - 1))
            const secondEl = document.getElementsByClassName("q_" + this.next)

            if (secondEl[0].classList.contains("nextSlidingReverse")) {
                secondEl[0].classList.remove("nextSlidingReverse")
            }

            firstEl[0].classList.add("onSlidingReverse")
            secondEl[0].classList.add("nextSlidingReverse")

            firstEl[0].classList.remove("onSliding")
            secondEl[0].classList.remove("nextSliding")

            if (this.next > 2) {
                this.next--
            }
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
