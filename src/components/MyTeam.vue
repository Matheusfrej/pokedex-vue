<template>
  <div class="my-team-container">
    <h2>My Team</h2>
    
    <div class="team-container">
      <PokemonCard :pokemon="pokemon" />
      <PokemonCard :pokemon="pokemon" />
      <PokemonCard :pokemon="pokemon" />
      <PokemonCard :pokemon="pokemon" />
      <PokemonCard :pokemon="pokemon" />
      <PokemonCard :pokemon="pokemon" />
    </div>
    
  </div>
</template>

<script>
import axios from 'axios'
import PokemonCard from './PokemonCard.vue';

  export default {
    data() {
        return {
            pokemon: undefined
        };
    },
    created() {
        this.fetchPokemonData();
    },
    methods: {
        async fetchPokemonData() {
            try {
                const response = await axios.get("https://pokeapi.co/api/v2/pokemon/1");
                const pokemonData = response.data;
                console.log(pokemonData.types);
                this.pokemon = {
                    name: pokemonData.name,
                    image: pokemonData.sprites.front_default,
                    types: pokemonData.types
                };
            }
            catch (error) {
                console.error(error);
            }
        }
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
