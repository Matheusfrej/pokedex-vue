<template>
  <header class="header-container">
    <div class="logo-header">
      <img src="../assets/pokedex.png" />
      <h3>Pokedex</h3>
    </div>
    <h2>Make your Pokémon Team!</h2>
    <h3 class="vue-text">Feito com <a href="https://vuejs.org/" target="_blank">Vue.js</a></h3>
  </header>
</template>

<script>
  export default {
    name: 'TheHeader'
  }
</script>

<style scoped>
.header-container {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1.5rem;
  width: 100%;
  height: 5rem;
  border-bottom: 1px solid var(--color-border);
  background: var(--color-background);
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.4);
  z-index: 999;
}
.header-container h2 {
  flex: 1;
  font-size: 2rem;
  text-align: center;
}

.logo-header {
  display: flex;
  align-items: center;
}

.logo-header img {
  width: 3rem;
}

.vue-text a {
  color: var(--vt-c-green)
}
.vue-text a:hover {
  color: var(--vt-c-green-light)
}

</style>
