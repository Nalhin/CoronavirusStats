<template>
  <div class="table-container">
    <b-table striped hover :items="worldData" :fields="fields" :small="true">
    </b-table>
    <div>Dane z {{ updatedDate }}</div>
  </div>
</template>

<script>
import dayjs from 'dayjs';
import jsonData from '../assets/data.json';

export default {
  name: 'World',
  data() {
    return {
      fields: [
        {
          key: 'country',
          label: 'Kraj',
        },
        { key: 'totalCases', label: 'Wszystkie przypadki' },
        {
          key: 'newCases',
          label: 'Nowe przypadki',
          tdClass: this.setNewCasesClass,
        },
        { key: 'totalDeaths', label: 'Śmierci razem' },
        {
          key: 'newDeaths',
          label: 'Nowe śmierci',
          tdClass: this.setNewDeathsClass,
        },
        { key: 'totalRecovered', label: 'Wyleczeni razem' },
        { key: 'seriousCritical', label: 'Stan krytyczny' },
      ],
      worldData: jsonData.data,
      updatedDate: dayjs(jsonData.updateDate).format('DD.MM.YY HH:MM:ss'),
    };
  },
  methods: {
    setNewCasesClass(value) {
      if (value) {
        return 'text-warning';
      }
    },
    setNewDeathsClass(value) {
      if (value) {
        return 'background-danger';
      }
    },
  },
};
</script>

<style scoped>
.table-container {
  max-width: 400px;
  margin: 0 auto;
}
</style>
