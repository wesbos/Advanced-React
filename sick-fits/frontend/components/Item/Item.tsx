import { FC } from "react";
import styled from 'styled-components';
import Link from 'next/link';
import Title from '../styles/Title';
import ItemStyles from '../styles/ItemStyles';
import PriceTag from '../styles/PriceTag';
import formatMoney from '../../lib/formatMoney';
import DeleteItem from "../DeleteItem";
//import DeleteItem from './DeleteItem';
//import AddToCart from './AddToCart';

export interface ItemProps {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  largeImage: string;
}

const Item: FC<ItemProps> = ({ id,
  title,
  description,
  price,
  image,
  largeImage }) => {

  return (
    <ItemStyles>
      {image && <img src={image} alt={title} />}

      <Title>
        <Link
          href={{
            pathname: '/item',
            query: { id: id },
          }}
        >
          <a>{title}</a>
        </Link>
      </Title>
      <PriceTag>{formatMoney(price)}</PriceTag>
      <p>{description}</p>

      <div className="buttonList">
        <Link
          href={{
            pathname: 'update',
            query: { id: id },
          }}
        >
          <a>Edit ✏️</a>
        </Link>
        <button id={id}>Add To Cart </button>
        <DeleteItem id={id}>Delete This Item</DeleteItem>
      </div>
    </ItemStyles>
  );
}

export default Item;