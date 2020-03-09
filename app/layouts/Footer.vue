<template>
  <footer class="footer">
    <span class="disclaimer">
      Strona jest czysto informacyjna, nie odpowiadam za poprawność danych na
      niej zawartych.
    </span>
    <a href="mailto:contact@koronawirus.news" class="contact">
      contact@koronawirus.news
    </a>
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
}
.contact {
  display: block;
}
</style>
