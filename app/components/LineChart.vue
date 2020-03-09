<script>
import { Line } from 'vue-chartjs';
import { filterUniqueProperty } from '../utils/filterUniqueProperty';
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
            spanGaps: true,
          },
          {
            label: 'Zgony',
            data: this.getDeaths(),
            fill: false,
            borderColor: 'red',
            spanGaps: true,
          },
          {
            label: 'Wyzdrowienia',
            data: this.getRecovered(),
            fill: false,
            borderColor: 'green',
            spanGaps: true,
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
              unitStepSize: 1,
              time: {
                tooltipFormat: 'll HH:mm',
                unit: 'day',
                stepSize: 1,
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
      return filterUniqueProperty(graph, 'totalCases').map(element => ({
        y: element.totalCases,
        x: element.date,
      }));
    },
    getDeaths() {
      return filterUniqueProperty(graph, 'totalDeaths').map(element => ({
        y: element.totalDeaths,
        x: element.date,
      }));
    },
    getRecovered() {
      return filterUniqueProperty(graph, 'totalRecovered').map(element => ({
        y: element.totalRecovered,
        x: element.date,
      }));
    },
  },
};
</script>
