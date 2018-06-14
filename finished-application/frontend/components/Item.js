import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Title from './styles/Title';
import AddToCart from './AddToCart';
import DeleteItem from './DeleteItem';
import formatMoney from '../lib/formatMoney';
import ItemStyles from './styles/ItemStyles';
import PriceTag from './styles/PriceTag';

class Item extends React.Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
  };

  render() {
    const item = this.props.item;
    return (
      <ItemStyles key={item.id}>
        {item.image && <img src={item.image} alt={item.title} />}
        <Title>
          <Link
            href={{
              pathname: '/item',
              query: { id: item.id },
            }}
          >
            <a>{item.title}</a>
          </Link>
        </Title>

        <PriceTag>{formatMoney(item.price)}</PriceTag>

        <p>{item.description}</p>

        <div className="buttonList">
          <Link
            href={{
              pathname: '/update',
              query: { id: item.id },
            }}
          >
            <a>Edit ✏️</a>
          </Link>
          <AddToCart id={item.id} />
          <DeleteItem id={item.id} />
        </div>
      </ItemStyles>
    );
  }
}

export default Item;
