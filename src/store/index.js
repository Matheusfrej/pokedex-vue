import { createStore } from 'vuex'

export default createStore({
  state: {
    team: [null, null, null, null, null, null]
  },
  getters: {

  },
  mutations: {
    addPokemon(state, pokemon) {
      for (let i = 0; i < state.team.length; i++) {
        if (state.team[i] === null) {
          state.team[i] = pokemon
          break
        }
      }
    }
  },
  actions: {

  }
})

