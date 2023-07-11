import axios from 'axios'

export default {
  api: axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon',
  })
} 