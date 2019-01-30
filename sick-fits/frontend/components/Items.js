import React, { Component } from 'react'
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Item from './Item';

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
const ALL_ITEMS_QUERY = gql`
  query ALL_ITEMS_QUERY {
    items {
      id
      title
      price
      description
      image
      largeImage
    }
  }
`;

export default class Items extends Component {
  render() {
    return (
      <Center>
        <p>Items!</p>
        {/* Only Child of a query component MUST be a function. */}
        <Query query={ALL_ITEMS_QUERY}>
          {({ data, error, loading }) => {
            // check error and loading state first!!! 
            if(data.error) return <p>{error.message} occurred..</p>
            if(data.loading) return <p>Loading</p>
            console.log(data.items)
            return <ItemsList>
              {data.items.map(item => <Item item={item} key={item.id}/> )}
            </ItemsList>;
          }}
        </Query>
      </Center>
    )
  }
}
