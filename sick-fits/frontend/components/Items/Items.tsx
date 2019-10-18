import { FC } from "react";
import { useQuery } from '@apollo/react-hooks';
import gql from "graphql-tag";
import styled from 'styled-components';
import Item from '../Item';


export interface ItemProps {
  item: {
    title: string,
    description: string,
    image: string,
    largeImage: string
    price: string
  }
}

export interface ItemData {
  items: ItemProps[]
}


const GET_ALL_ITEMS = gql`
  query GET_ALL_ITEMS {
    items {
    id, 
    title,
    description,
    image,
    largeImage,
    price,
  }
}
`
const Center = styled.div`
  text-align: center;
`;

const ItemsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
`;


const Items: FC<any> = () => {
  const { loading, error, data } = useQuery<ItemData, any>(GET_ALL_ITEMS);
  console.log('ITEM', data && data.items.map((item: any) => item))
  return (
    <Center>
      <h2>Items</h2>
      {loading && <p>...loading</p>}
      {error && <p>{error.message}</p>}
      <ItemsList>
        {data && data.items.map((item: any) => (
          <Item key={item.id} {...item} />
        ))}
      </ItemsList>
    </Center>
  );
}

export default Items;