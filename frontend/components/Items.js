import React from 'react';
import { Query } from 'react-apollo';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import Pagination from './Pagination';
import Item from './Item';
import LoadingItem from './LoadingItem';
import { perPage } from '../config';

const ALL_ITEMS_QUERY = gql`
  query ALL_ITEMS_QUERY($skip: Int = 0, $first: Int = ${perPage}) {
    items(orderBy: createdAt_DESC, first: $first, skip: $skip) {
      __typename
      id
      title
      price
      description
      image
      largeImage
    }
  }
`;

const Items = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
`;

const Center = styled.div`
  text-align: center;
`;

class ItemList extends React.Component {
  static propTypes = {
    page: PropTypes.number.isRequired,
  };
  render() {
    return (
      <Center key={this.props.page}>
        <Pagination page={this.props.page} />
        <Query
          query={ALL_ITEMS_QUERY}
          variables={{
            skip: this.props.page * perPage - perPage,
            first: perPage,
          }}
          // fetchPolicy="network-only"
        >
          {({ data, error, loading }) => {
            if (loading) {
              return (
                <Items>
                  {Array.from({ length: 4 })
                    .map((x, id) => ({ id }))
                    .map(x => <LoadingItem key={x.id} />)}
                </Items>
              );
            }
            if (error) return <div>Error</div>;
            return <Items>{data.items.map(item => <Item key={item.id} item={item} />)}</Items>;
          }}
        </Query>
        <Pagination page={this.props.page} />
      </Center>
    );
  }
}

export default ItemList;
export { ALL_ITEMS_QUERY };
