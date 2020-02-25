<template>
  <div class="container">
    <img src="../assets/virus.svg" alt="virus" class="virus-image" />
    <SummarySection />
    <SpreadSection />
    <div class="map-container">
      <h2>Mapa zarażeń</h2>
      <iframe
        src="https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6"
        class="map-iframe"
      />
    </div>
  </div>
</template>

<script>
import SpreadSection from '../components/SpreadSection';
import SummarySection from '../components/SummarySection';

export default {
  components: { SummarySection, SpreadSection },
};
</script>

<style lang="scss">
.virus-image {
  max-width: 300px;
  margin: 0 auto;
}
.badge {
  color: #fff;
  border-radius: 4px;
  padding: 2px;
  white-space: nowrap;
  &-large {
    padding: 2px 8px;
    border-radius: 8px;
  }
  &--danger {
    background: red;
  }
  &--success {
    background: green;
  }
}

.subtitle {
  color: #747474;
  font-size: 12px;
  font-weight: bold;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  max-width: 90%;
}

.summary {
  display: flex;
  flex-direction: row;
  > div {
    margin: 8px;
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
}

.map-container {
  width: 100%;
}
.map-iframe {
  margin-top: 8px;
  width: 100%;
  min-height: 700px;
}
</style>
