import { SET_POKEMONS } from './types';
import { getPokemonDetails } from '../api'

export const setPokemons = (payload) => ({
  type: SET_POKEMONS,
  payload,
});

export const getPokemonWithDetails = (pokemons = []) =>
  async (dispatch) => {
    const pokemonDetail = await Promise.all(
      pokemons.map(poke => getPokemonDetails(poke))
    );

    dispatch(setPokemons(pokemonDetail));
  }