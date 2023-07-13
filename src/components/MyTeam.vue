<template>
  <div class="my-team-container">
    <h2>My Team</h2>
    
    <div class="team-container">
      <div v-for="(pokemon, idx) in $store.state.team" :key="idx">
        <PokemonCard :pokemon="pokemon" />
      </div>
    </div>
  </div>
</template>

<script>
import PokemonCard from './PokemonCard.vue';

  export default {
    data() {
        return {
            pokemonTeam: [null, null, null, null, null, null]
        };
    },
    created() {
    },
    components: { PokemonCard }
};
</script>

<style scoped>
.my-team-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.team-pokemon-container {
  background: var(--color-background);
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 150px;
}

h2 {
  padding-left: 5rem;
}

.team-container {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  max-width: fit-content;
  gap: 2rem;
  margin: auto;
  padding: 3rem;
  background: var(--vt-c-blue-lighter);
  margin-bottom: 5rem;
  border-radius: 32px;
}



</style>
