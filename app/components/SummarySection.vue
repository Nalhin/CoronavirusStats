<template>
  <div>
    <div class="page-title-container">
      <h2>
        Koronawirus w Polsce
      </h2>
      <div class="polish-flag" />
    </div>
    <UpdateInfo :time="'1 godzine'" :updated-date="updatedDate" />
    <div class="summary">
      <StatBlock
        :number="polandData.totalCases"
        :description="'Potwierdzone'"
        :sub-description="'Osoby zarażone na terytorium Polski.'"
      >
        <template v-slot:badge>
          <div v-if="polandData.newCases" class="badge badge--danger">
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
          <div v-if="polandData.newDeaths" class="badge badge--danger">
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
  </div>
</template>

<script>
import moment from 'moment';
import data from '../assets/data';
import StatBlock from './StatBlock';
import UpdateInfo from './UpdateInfo';

export default {
  name: 'SummarySection',
  components: { UpdateInfo, StatBlock },
  data() {
    return {
      updatedDate: moment(data.updateDate).format('DD.MM.YY HH:MM:ss'),
      polandData: data,
    };
  },
};
</script>

<style scoped>
.page-title-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 8px;
  margin: 0;
}

.polish-flag {
  background: linear-gradient(-180deg, white 50%, red 50%);
  display: inline-block;
  width: 24px;
  height: 14px;
  border: 1px black solid;
  margin-left: 8px;
}
</style>
