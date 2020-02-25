<script>
import { Line } from 'vue-chartjs';
import moment from 'moment';
import graph from '../assets/graph.json';

export default {
  extends: Line,
  data() {
    return {
      datacollection: {
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
        title: {
          display: true,
          text: `Ostatnia aktualizacja ${this.getLatestDate()}`,
          position: 'top',
        },
        scales: {
          xAxes: [
            {
              type: 'time',
              distribution: 'series',
              time: {
                unit: 'day',
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
    this.renderChart(this.datacollection, this.options);
  },
  methods: {
    getTotal() {
      return graph.map(element => ({
        y: element.totalCases,
        x: new Date(element.date),
      }));
    },
    getDeaths() {
      return graph.map(element => ({
        y: element.totalDeaths,
        x: new Date(element.date),
      }));
    },
    getRecovered() {
      return graph.map(element => ({
        y: element.totalRecovered,
        x: new Date(element.date),
      }));
    },
    getLatestDate() {
      return moment(graph[graph.length - 1].date).format('DD.MM.YY HH:MM:ss');
    },
  },
};
</script>
