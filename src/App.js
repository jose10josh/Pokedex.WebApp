import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Spin } from 'antd';
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import { getPokemon } from './api';
import { getPokemonWithDetails, setLoading } from './actions';
import logo from './statics/logo.svg';
import './App.css';

function App() {
  //IMMUTABLE JS
  const pokemons = useSelector((state) => state.get('pokemons')).toJS();
  const loading = useSelector((state) => state.get('loading'));
  //
  // const loading = useSelector(state => state.loading);
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchPokemons = async () => {
      dispatch(setLoading(true))
      const pokemonsRes = await getPokemon();
      dispatch(getPokemonWithDetails(pokemonsRes));
      dispatch(setLoading(false))
    };

    fetchPokemons();
  }, []);

  return (
    <div className='App'>
      <Col span={4} offset={10}>
        <img src={logo} alt='Pokedux' />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>

      {loading ? <Col offset={12}>
          <Spin size="large" />
      </Col>
      : <PokemonList pokemons={pokemons} />
      }

    </div>
  );
}

export default App;