import React from 'react';
import styled from 'styled-components';
import slugify from 'slugify';
import { compose } from 'react-apollo';
import { Link } from '../routes';
import AddToCart from './AddToCart';
import makeImage from '../lib/image';
import formatMoney from '../lib/formatMoney';
import { removeItemMutation } from '../enhancers/enhancers';

const Item = styled.div`
  background: #f3f3f3;
  padding: 5px;
  img {
    width: 100%;
  }
`;

class ItemComponent extends React.Component {
  removeItem = () => {
    this.props.removeItem({ variables: { id: this.props.item.id } });
  };
  render() {
    const item = this.props.item;
    return (
      <Item key={item.id}>
        {item.image ? <img src={item.image} alt={item.title} /> : null}
        <h3>
          <Link
            route="item"
            params={{
              slug: slugify(item.title),
              itemId: item.id,
            }}
          >
            <a>{item.title}</a>
          </Link>
        </h3>

        <p>{item.description}</p>

        <Link
          href={{
            pathname: '/admin/update',
            query: { id: item.id },
          }}
        >
          <a>Edit ✏️</a>
        </Link>
        <AddToCart id={item.id} />
        <button onClick={this.removeItem}>&times; Delete item</button>
      </Item>
    );
  }
}

export default compose(removeItemMutation)(ItemComponent);
