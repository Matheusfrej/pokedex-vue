<template>
  <div v-if="pokemon" class="team-pokemon-container">  
    <header>
      <strong>Bulbasaur</strong>
      <span>#1</span>
    </header>
    <img :src="pokemon.image" alt="">
    <footer>
      <PokemonType v-for="type in pokemon.types" :key="type" :type="type.type.name" />
    </footer>
  </div>
</template>

<script>
import PokemonType from './PokemonType.vue';

  export default {
    name: 'PokemonCard',
    props: {
      pokemon: {}
    },

    components: { PokemonType }
  }
</script>

<style scoped>
.team-pokemon-container {
  background: var(--color-background);
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
}

.team-pokemon-container header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: -1rem;
  z-index: 999;
}

.team-pokemon-container footer {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: -1rem;
  gap: 0.5rem;
}
</style>
