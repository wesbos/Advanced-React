import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Title from './styles/Title';
import AddToCart from './AddToCart';
import DeleteItem from './DeleteItem';
import formatMoney from '../lib/formatMoney';
import PropTypes from 'prop-types';

const Item = styled.div`
  background: white;
  border: 1px solid ${props => props.theme.offWhite};
  box-shadow: ${props => props.theme.bs};
  position: relative;
  display: grid;
  align-content: start;
  grid-auto-rows: fit-content;
  img {
    width: 100%;
  }
  p {
    font-size: 14px;
    line-height: 2;
    font-weight: 600;
    padding: 0 3rem;
    font-size: 1.5rem;
  }
  .buttonList {
    display: grid;
    border-top: 1px solid ${props => props.theme.lightgrey};
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-gap: 1px;
    background: ${props => props.theme.lightgrey};
    align-self: end;
    & > * {
      background: white;
      border: 0;
      text-align: center;
      font-size: 1rem;
      padding: 1rem;
    }
  }
`;

const PriceTag = styled.span`
  background: ${props => props.theme.red};
  transform: rotate(2deg);
  color: white;
  font-weight: 600;
  padding: 5px;
  font-size: 3rem;
  display: inline-block;
  position: absolute;
  top: -3px;
  right: -3px;
`;

class ItemComponent extends React.Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
  };

  render() {
    const item = this.props.item;
    return (
      <Item key={item.id}>
        {item.image ? <img src={item.image} alt={item.title} /> : null}
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
              pathname: '/admin/update',
              query: { id: item.id },
            }}
          >
            <a>Edit ✏️</a>
          </Link>
          <AddToCart id={item.id} />
          <DeleteItem id={item.id} />
        </div>
      </Item>
    );
  }
}

export default ItemComponent;
