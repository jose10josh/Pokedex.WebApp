import { fromJS } from 'immutable';
import { SET_FAVORITE, SET_POKEMONS } from '../actions/types';

const initialState = fromJS({
  pokemons: [],
})

export const pokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      // return { ...state, pokemons: action.payload };
      return state.setIn(['pokemons'], fromJS(action.payload));
    case SET_FAVORITE:
      // const newPokemonList = [...state.pokemons];
      // const currentPokeIndex = newPokemonList.findIndex((pokemon) => {
      //   return pokemon.id === action.payload.pokemonId
      // })
      // if(currentPokeIndex < 0) return state;
      // newPokemonList[currentPokeIndex].favorite = !newPokemonList[currentPokeIndex].favorite
      // return {
      //   ...state,
      //   pokemons: newPokemonList
      // }

      //Using immutableJs
      const currentPokeIndex = state.get('pokemons').findIndex((pokemon) =>{
        return pokemon.get('id') === action.payload.pokemonId
      })
      if(currentPokeIndex < 0) return state;

      // const isFavorite = state.get('pokemons').get(currentPokeIndex).get('favorite');
      const isFavorite = state.getIn(['pokemons', currentPokeIndex, 'favorite']);
      return state.setIn(['pokemons', currentPokeIndex, 'favorite'], !isFavorite);
    default:
      return state;
  }
};
