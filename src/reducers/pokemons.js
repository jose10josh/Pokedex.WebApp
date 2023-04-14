import { fromJS } from 'immutable';
import { SET_FAVORITE, SET_POKEMONS } from '../actions/types';

const initialState = fromJS({
  pokemons: [],
})

export const pokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      return state.setIn(['pokemons'], fromJS(action.payload));
    case SET_FAVORITE:
      const currentPokeIndex = state.get('pokemons').findIndex((pokemon) =>{
        return pokemon.get('id') === action.payload.pokemonId
      })
      if(currentPokeIndex < 0) return state;

      const isFavorite = state.getIn(['pokemons', currentPokeIndex, 'favorite']);
      return state.setIn(['pokemons', currentPokeIndex, 'favorite'], !isFavorite);
    default:
      return state;
  }
};
