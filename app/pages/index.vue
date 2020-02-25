<template>
  <div class="container">
    <img src="../assets/virus.svg" alt="virus" class="virus-image" />
    <div class="page-title">
      <h2>
        Koronawirus w Polsce
      </h2>
    </div>
    <div class="card-container">
      <StatBlock
        :number="polandData.totalCases"
        :description="'Potwierdzone'"
        :sub-description="'Osoby zarażone na terytorium Polski.'"
      >
        <template v-slot:badge>
          <div v-if="polandData.newCases" class="badge badge-success">
            +{{ polandData.newCases }}
          </div>
        </template>
      </StatBlock>
      <StatBlock
        :number="polandData.totalDeaths"
        :description="'Śmierci'"
        :sub-description="'Ilość śmierci na koronawirusa w Polsce.'"
      >
        <template v-slot:badge>
          <div v-if="polandData.newDeaths" class="badge badge-danger">
            +{{ polandData.newDeaths }}
          </div>
        </template>
      </StatBlock>
      <StatBlock
        :number="polandData.totalRecovered"
        :description="'Wyleczeni'"
        :sub-description="'Ilość osób wyleczonych z koronawirusa w Polsce.'"
      />
      <StatBlock
        :number="polandData.seriousCritical"
        :description="'Krytyczne'"
        :sub-description="'Przypadki w stanie krytycznym na terytorium Polski.'"
      />
    </div>
    <div class="title-subsection">
      <div>
        Informacje są aktualizowane co
        <span class="badge badge-success">1 godzine</span>
      </div>
      <div class="subtitle">Ostatnia aktualizacja {{ updatedDate }}</div>
    </div>
    <div class="spread">
      <h2>Rozprzestrzenianie się wirusa na terytorium Polski</h2>
      <div>
        Informacje są aktualizowane co
        <span class="badge badge-success">6 godzin</span>
      </div>
      <line-chart class="chart-container" />
    </div>
    <div>
      <div>
        <h2>Mapa zarażeń i podejrzeń</h2>
        <span>Źródło reddit</span>
      </div>
      <iframe
        type="iframe"
        src="https://maphub.net/embed/81509?button=0&legend=1"
        class="map-iframe"
      />
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import data from '../assets/data.json';
import LineChart from '../components/LineChart';
import StatBlock from '../components/StatBlock';

export default {
  components: { StatBlock, LineChart },
  data() {
    return {
      updatedDate: moment(data.updateDate).format('DD.MM.YY HH:MM:ss'),
      polandData: data,
    };
  },
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
  &-danger {
    background: red;
  }
  &-success {
    background: green;
  }
}

.subtitle {
  color: #747474;
  font-size: 12px;
  font-weight: bold;
}

.title-subsection {
  padding-top: 16px;
  > div {
    padding: 4px;
  }
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

.card-container {
  display: flex;
  flex-direction: row;
  > div {
    margin: 8px;
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
}
.page-title {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  padding: 16px 0;
}

.polish-flag {
  background: linear-gradient(-180deg, white 50%, red 50%);
  display: inline-block;
  width: 70px;
  height: 40px;
  border: 1px black solid;
  margin-left: 16px;
}

.spread {
  margin: 3rem auto 0;
  max-width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.map-iframe {
  max-width: 90%;
}

.chart-container {
  position: relative;
  width: 100%;
}
</style>
