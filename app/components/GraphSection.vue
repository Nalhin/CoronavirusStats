<template>
  <div class="graph">
    <h2>Szereg czasowy zachorowań na terytorium Polski</h2>
    <UpdateInfo :time="'6 godzin'" :updated-date="latestDate" />
    <line-chart class="chart-container" />
  </div>
</template>

<script>
import moment from 'moment';
import graph from '../assets/graph';
import LineChart from './LineChart';
import UpdateInfo from './UpdateInfo';

export default {
  name: 'SpreadSection',
  components: { UpdateInfo, LineChart },
  data() {
    return {
      latestDate: moment(graph[graph.length - 1].date).format(
        'DD.MM.YY HH:MM:ss',
      ),
    };
  },
};
</script>

<style scoped lang="scss">
.graph {
  margin-top: 2rem;
  max-width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.chart-container {
  position: relative;
  width: 100%;
}
</style>
