import Axios from 'axios'

export default Axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokedex/',
  timeout: 25000,
})
