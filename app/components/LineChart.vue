<script>
import { Line } from 'vue-chartjs';
import graph from '../assets/graph.json';

export default {
  extends: Line,
  data() {
    return {
      graphData: {
        datasets: [
          {
            label: 'Zachorowania',
            data: this.getTotal(),
            fill: false,
            borderColor: 'orange',
          },
          {
            label: 'Śmierci',
            data: this.getDeaths(),
            fill: false,
            borderColor: 'red',
          },
          {
            label: 'Wyzdrowienia',
            data: this.getRecovered(),
            fill: false,
            borderColor: 'green',
          },
        ],
      },
      options: {
        styles: {
          width: '100%',
          position: 'relative',
        },
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          xAxes: [
            {
              type: 'time',
              distribution: 'series',
              time: {
                tooltipFormat: 'll HH:mm',
                unit: 'day',
                unitStepSize: 1,
              },
            },
          ],
          yAxes: [
            {
              type: 'linear',
            },
          ],
        },
      },
    };
  },
  mounted() {
    this.renderChart(this.graphData, this.options);
  },
  methods: {
    getTotal() {
      return graph.map(element => ({
        y: element.totalCases,
        x: element.date,
      }));
    },
    getDeaths() {
      return graph.map(element => ({
        y: element.totalDeaths,
        x: element.date,
      }));
    },
    getRecovered() {
      return graph.map(element => ({
        y: element.totalRecovered,
        x: element.date,
      }));
    },
  },
};
</script>
