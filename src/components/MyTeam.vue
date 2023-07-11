<template>
  <div>
    <h1>My Team</h1>
    
    <div class="team-container">
      <div v-if="pokemon" class="team-pokemon-container">  
        <header>
          <strong>Bulbasaur</strong>
          <span>#1</span>
        </header>
        <img :src="pokemon.image" alt="">
        <footer>
          <PokemonType type="Grass"/>
          <PokemonType type="Poison"/>
        </footer>
      </div>
    </div>
    
  </div>
</template>

<script>
import axios from 'axios'
import PokemonType from './PokemonType.vue';

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
                this.pokemon = {
                    name: pokemonData.name,
                    image: pokemonData.sprites.front_default
                };
            }
            catch (error) {
                console.error(error);
            }
        }
    },
    components: { PokemonType }
};
</script>

<style scoped>
.team-container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.team-pokemon-container {
  background: var(--color-background);
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid black;
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

.team-pokemon-container img {
  width: 150px;
  height: 150px;
  z-index: -1;
}

</style>
