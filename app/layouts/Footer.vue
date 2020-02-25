<template>
  <footer class="footer">
    <div>
      Dane znajdujące się na stronie pochodza z
      <a href="https://www.worldometers.info/coronavirus/" target="_blank">
        https://www.worldometers.info/coronavirus/
      </a>
    </div>
    <span class="disclaimer">
      Strona jest czysto informacyjna, nie odpowiadam za poprawność
      jakichkolwiek danych na niej zawartych.
    </span>
    <div>
      Kontakt -
      <a href="mailto:contact@koronawirus.news">
        contact@koronawirus.news
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
.footer {
  margin-top: 12px;
  text-align: center;
  background: #f8f8f8;
  padding: 24px;
}
.disclaimer {
  padding-top: 8px;
  font-size: 12px;
}
</style>
