<template functional>
  <div class="title-subsection">
    <div>
      Informacje są aktualizowane co
      <span class="badge badge--success badge-large">{{ props.time }}</span>
    </div>
    <div class="subtitle">Ostatnia aktualizacja {{ props.updatedDate }}</div>
  </div>
</template>

<script>
export default {
  name: 'UpdateInfo',
  props: {
    time: {
      type: String,
      default: '',
    },
    updatedDate: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped lang="scss">
.title-subsection {
  padding: 8px;
  > div {
    padding: 2px;
  }
}
</style>
