<template>
  <div class="container">
    <main class="content-container">
      <MyTeam />
      <div v-for="(card, idx) in cards" :key="idx">
        <PokemonCard  />
      </div>
    </main>
  </div>  
</template>

<script>
import PokemonCard from '../components/PokemonCard.vue';
import MyTeam from '../components/MyTeam.vue';

  export default {
    name: "HomePage",
    data() {
        return {
            cards: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        };
    },
    components: { PokemonCard, MyTeam }
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
