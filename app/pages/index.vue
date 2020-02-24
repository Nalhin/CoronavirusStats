<template>
  <div class="container">
    <h2>Statystyki dla Polski</h2>
    <div class="card-container">
      <b-card title="Wszystkie przypadki"
        >{{ polandData.totalCases }}
        <b-badge v-if="polandData.newCases" variant="danger"
          >+{{ polandData.newCases }}</b-badge
        >
      </b-card>
      <b-card title="Smierci"
        >{{ polandData.totalDeaths }}
        <b-badge v-if="polandData.newDeaths" variant="danger"
          >+{{ polandData.newDeaths }}</b-badge
        >
      </b-card>
      <b-card title="Wyleczeni">{{ polandData.totalRecovered }}</b-card>
      <b-card title="Stan krytyczny">{{ polandData.seriousCritical }}</b-card>
    </div>
    <div>Dane z {{ updatedDate }}</div>
    <b-embed
      type="iframe"
      aspect="16by9"
      src="https://maphub.net/embed/81509?button=0&legend=1"
      allowfullscreen
    ></b-embed>
  </div>
</template>

<script>
import dayjs from 'dayjs';
import jsonData from '../assets/data.json';

const defaultData = {
  totalCases: 0,
  newCases: 0,
  totalDeaths: 0,
  newDeaths: 0,
  totalRecovered: 0,
  seriousCritical: 0,
};

export default {
  data() {
    return {
      updatedDate: dayjs(jsonData.updateDate).format('DD.MM.YY HH:MM:ss'),
      polandData:
        jsonData.data.find(country => country === 'Poland') || defaultData,
    };
  },
};
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
}

.card-container {
  display: flex;
  flex-direction: row;

  > div {
    margin: 8px;
  }
}
</style>
