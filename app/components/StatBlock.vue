<template functional>
  <div>
    <div class="number-container">
      <span class="number">{{ props.number }}</span>
      <div class="badge-container">
        <slot name="badge"></slot>
      </div>
    </div>
    <h2>{{ props.description }}</h2>
    <span>{{ props.subDescription }}</span>
  </div>
</template>

<script>
export default {
  name: 'StatBlock',
  props: {
    number: Number,
    description: String,
    subDescription: String,
  },
};
</script>

<style scoped lang="scss">
.number {
  font-size: 3rem;
  color: #fff;
}

.number-container {
  background: rgb(160, 174, 192);
  margin: 8px auto;
  width: 6rem;
  border-radius: 6px;
  position: relative;
  padding: 8px;
}

.badge-container {
  position: absolute;
  top: 4px;
  right: 4px;
}
</style>
