<template>
  <div 
    v-if="pokemon" 
    :class="cardClass" 
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  > 
    <header>
      <strong>{{pokemon.name}}</strong>
      <span>#{{pokemon.id}}</span>
    </header>
    <img :src="pokemon.image" alt="">
    <div v-show="showPlus" class="plus-sign">+</div>
    <footer>
      <PokemonType v-for="type in pokemon.types" :key="type" :type="type.type.name" />
    </footer>
  </div>
  <div v-else class="team-pokemon-container-none"></div>
</template>

<script>
import PokemonType from './PokemonType.vue';

  export default {
    name: 'PokemonCard',
    props: {
      pokemon: {},
      in_pokedex: {
        type: Boolean,
        required: false,
        default: false,
      },
    },

    data() {
      return {
        showPlus: false
      }
    },

    computed: {
      cardClass() {
        if (this.in_pokedex) return ['team-pokemon-container', 'pokedex']
        return ['team-pokemon-container', 'team']
      },
    },
    
    methods: {
    handleMouseEnter() {
      this.showPlus = true;
    },
    handleMouseLeave() {
      this.showPlus = false;
    },
  },

    components: { PokemonType }
  }
</script>

<style scoped>
.team-pokemon-container {
  position: relative;
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

.pokedex:hover {
  opacity: 0.4;
  cursor: pointer;
}

.pokemon-card:hover .plus-sign {
  opacity: 1;
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

.plus-sign {
  opacity: 2;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 7rem;
  color: var(--vt-c-blue-darker);
}

.team-pokemon-container footer {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
}
</style>
