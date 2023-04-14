import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getPokemon, getPokemonDetails } from '../api';
import { setLoading } from './uiSlice';


const initialState = {
  pokemons: []
};
export const fetchPokemonWithDetails = createAsyncThunk(
  'data/fetchPokemonWithDetails',
  async(_, {dispatch}) => {
    dispatch(setLoading(true))

    const pokemonsRes = await getPokemon();
    const pokemonDetail = await Promise.all(
      pokemonsRes.map(poke => getPokemonDetails(poke))
    );
    dispatch(setPokemons(pokemonDetail));
    dispatch(setLoading(false))
  }
)

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload
    },
    setFavorite: (state, action) => {
      const currentPokeIndex = state.pokemons.findIndex((pokemon) =>{
        return pokemon.id === action.payload.pokemonId
      })
      if(currentPokeIndex > 0) {
        const isFavorite = state.pokemons[currentPokeIndex].favorite;

        state.pokemons[currentPokeIndex].favorite =  !isFavorite;
      }
    }
  }
})

export const {setPokemons, setFavorite} = dataSlice.actions;
export default dataSlice.reducer;