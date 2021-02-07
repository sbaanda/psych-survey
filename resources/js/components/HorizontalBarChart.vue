<script>
import { HorizontalBar } from "vue-chartjs";

export default {
    name: 'HorizontalBarChart',
    extends: HorizontalBar,
    props: {
        barLabels: {
            type: Array,
            default: []
        },
        barDatasets: {
            type: Array,
            default: []
        }
    },
    mounted () {
        this.renderChart({
            labels: this.barLabels,
            datasets: this.barDatasets
        }, {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                    ticks: {
                        beginAtZero: true,
                        precision: false
                    },
                    gridLines: {
                        display: false,
                        drawBorder: false
                    }
                }],
                yAxes: [{
                    gridLines: {
                        display: false,
                        drawBorder: false
                    }
                }]
            }
        })
    }
}
</script>

<style scoped>

</style>
