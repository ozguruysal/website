<template>
    <footer class="site-footer">
        <div class="container-fluid">
            <div class="col text-center">
                <p class="text-secondary mb-0">Designed with <a href="https://www.adobe.com/products/illustrator.html" target="_blank">Adobe Illustrator</a> and built with <a href="https://nuxtjs.org/" target="_blank">Nuxt.js</a> using <a href="https://code.visualstudio.com/" target="_blank">Visual Studio Code</a> - © {{ currentYear }} Özgür Uysal</p>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
  name: "AppFooter",

  computed: {
      currentYear() {
          return new Date().getFullYear();
      }
  }
};
</script>

<style lang="scss">
@import "../assets/scss/overrides/bootstrap/variables";

.site-footer {
  padding: 2.5rem 0;
  font-size: 0.9375rem;
  border-top: 1px solid $gray-300;
  background-color: $gray-100;
}
</style>
