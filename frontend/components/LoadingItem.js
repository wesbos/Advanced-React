import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Title from './styles/Title';
import AddToCart from './AddToCart';
import DeleteItem from './DeleteItem';
import formatMoney from '../lib/formatMoney';
import ItemStyles from './styles/ItemStyles';
import PriceTag from './styles/PriceTag';

class LoadingItem extends React.Component {
  render() {
    return (
      <ItemStyles>
        <img
          src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
          alt="Loading..."
        />>
        <Title>
          <a>Loading...</a>
        </Title>
        <p>Please Wait</p>
      </ItemStyles>
    );
  }
}

export default LoadingItem;
