import React from 'react';
import { Query } from 'react-apollo';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Pagination from './Pagination';
import Item from './Item';
import { perPage } from '../config';
import { ALL_ITEMS_QUERY } from '../queries/index';

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
  componentDidUpdate(lastProps) {
    if (lastProps.page === this.props.page) return;
    // update the query
    console.log('This fires, and should update the query');
  }
  render() {
    return (
      <Center key={this.props.page}>
        <Pagination page={this.props.page} />
        <Query
          query={ALL_ITEMS_QUERY}
          fetchPolicy="cache-and-network"
          ssr={false}
          variables={{
            skip: this.props.page * perPage - perPage,
            first: perPage,
          }}
        >
          {({ data, error, loading, variables, refetch }) => {
            if (loading) return <div>Loading</div>;
            if (error) return <div>Error</div>;
            return <Items key={this.props.page}>{data.items.map(item => <Item key={item.id} item={item} />)}</Items>;
          }}
        </Query>
        <Pagination page={this.props.page} />
      </Center>
    );
  }
}

export default ItemList;
