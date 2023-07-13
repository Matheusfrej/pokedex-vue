<template>
  <div class="container">
    <main class="content-container">
      <MyTeam />
      <h2>Pokedex</h2>
      <div v-if="pokemons.length > 0" class="pokedex-container">
        <PokemonCard 
          :in_pokedex="true" 
          :pokemon="pokemon" 
          v-for="(pokemon, idx) in pokemons" 
          :key="idx"
          @click="addPokemon(pokemon)"
        />
      </div>
    </main>
  </div>  
</template>

<script>
import PokemonCard from '../components/PokemonCard.vue';
import MyTeam from '../components/MyTeam.vue';
import axios from 'axios';

  export default {
    name: "HomePage",
    data() {
        return {
            pokemons: []
        };
    },
    created() {
        this.fetchPokemonData();
        console.log(this.$store.state.team);
    },
    methods: {
        async fetchPokemonData() {
            try {
                const response = await axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1010");
                const requests = response.data.results.map((pokemon) => {
                  return axios.get(pokemon.url) 
                })
                const responses = await axios.all(requests)
                responses.map(response => response.data).forEach((pokemon) => {
                  this.pokemons.push({
                    id: pokemon.id,
                    name: pokemon.name,
                    image: pokemon.sprites.front_default,
                    types: pokemon.types
                });
                })
            }
            catch (error) {
                console.error(error);
            }
        },

        addPokemon(pokemon) {
          this.$store.commit('addPokemon', pokemon)
        }
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

h2 {
  padding-left: 5rem;
  margin-bottom: 2rem;
}

.pokedex-container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: fit-content;
  gap: 2rem;
  margin: auto;
  padding: 3rem;
  background: var(--vt-c-blue-lighter);
  margin-bottom: 5rem;
  border-radius: 32px;
}
</style>
