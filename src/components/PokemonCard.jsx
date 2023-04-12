import { StarOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import './PokemonList.css';

const PokemonCard = ({ name, image, types }) => {

  return (
    <Card
      title={name}
      cover={
        <img src={image} alt={name}/>
      }
      extra={<StarOutlined />}
    >
      <Meta description={types.map(type => (type.type.name)).join(", ")} />
    </Card>
  );
};

export default PokemonCard;
