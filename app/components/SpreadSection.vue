<template>
  <div class="spread">
    <h2>Szereg czasowy rozprzestrzeniania się wirusa na terytorium Polski</h2>
    <div class="spread-disclaimer">
      Informacje są aktualizowane co
      <span class="badge badge--success badge-large">6 godzin</span>
    </div>
    <line-chart class="chart-container" />
  </div>
</template>

<script>
import LineChart from './LineChart';

export default {
  name: 'SpreadSection',
  components: { LineChart },
};
</script>

<style scoped lang="scss">
.spread {
  margin: 2rem auto 0;
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
.spread-disclaimer {
  margin: 8px 0 -4px;
}
</style>
