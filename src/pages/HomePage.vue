<template>
  <div>
    <TheHeader />
    <main>
      <h1>HomePage</h1>
      <div v-for="(card, idx) in cards" :key="idx">
        <PokemonCard  />
      </div>
    </main>
  </div>
  
  
</template>

<script>
import PokemonCard from '../components/PokemonCard.vue';
import TheHeader from '../components/TheHeader.vue';
  export default {
    name: "HomePage",
    data() {
        return {
            cards: [1, 1, 1, 1, 1]
        };
    },
    components: { PokemonCard, TheHeader }
}

  
</script>

<style scoped>
</style>
