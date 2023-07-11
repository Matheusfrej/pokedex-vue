<template>
  <div class="container">
    <main class="content-container">
      <h1>HomePage</h1>
      <div v-for="(card, idx) in cards" :key="idx">
        <PokemonCard  />
      </div>
    </main>
  </div>
  
  
</template>

<script>
import PokemonCard from '../components/PokemonCard.vue';
  export default {
    name: "HomePage",
    data() {
        return {
            cards: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        };
    },
    components: { PokemonCard }
}

  
</script>

<style scoped>
.container {
  width: 100%;
  z-index: -1;
  max-width: 1280px;
  margin: auto;
}

.content-container {
  margin-top: 7rem;
}
</style>
