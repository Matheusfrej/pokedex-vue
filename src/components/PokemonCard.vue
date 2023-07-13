<template>
  <div v-if="pokemon" class="team-pokemon-container">  
    <header>
      <strong>{{pokemon.name}}</strong>
      <span>#{{pokemon.id}}</span>
    </header>
    <img :src="pokemon.image" alt="">
    <footer>
      <PokemonType v-for="type in pokemon.types" :key="type" :type="type.type.name" />
    </footer>
  </div>
  <div v-else class="team-pokemon-container-none">  
    
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
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 150px;
  max-height: 180px;
}

.team-pokemon-container-none {
  background: var(--color-background);
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 150px;
  height: 180px;
}

.team-pokemon-container header {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
}

.team-pokemon-container img {
  width: 100px;
  height: 100px;
}

.team-pokemon-container footer {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
}
</style>
