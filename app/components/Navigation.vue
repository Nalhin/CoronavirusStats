<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand to="/">Koronawirus.news</b-navbar-brand>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/">Polska</b-nav-item>
        <b-nav-item to="/world">Świat</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'Navigation',

  head() {
    return {
      title: 'Koronawirus.news',
    };
  },
};
</script>

<style scoped lang="scss"></style>
