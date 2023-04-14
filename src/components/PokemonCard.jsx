import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import { useDispatch } from 'react-redux';

import { StarButton } from './StarButton';
import { setFavorite } from '../slices/dataSlice';

import './PokemonList.css';

const PokemonCard = ({ id, name, image, types, favorite }) => {
  const dispatch = useDispatch()

  const handleOnFavorite = () => {
    dispatch(setFavorite({pokemonId:id}))
  }
  const pokeType = types.map(elem => (elem.type.name)).join(", ");
  return (
    <Card
      title={name}
      cover={<img src={image} alt={name}/> }
      extra={<StarButton isFavorite={favorite} onClick={handleOnFavorite} />}
    >
      <Meta description={pokeType} />
    </Card>
  );
};

export default PokemonCard;
