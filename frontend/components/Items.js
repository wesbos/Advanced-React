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
  static getDerivedStateFromProps(nextProps, state) {
    console.log(nextProps);
    return { refetch: state.page !== nextProps.page };
  }
  state = {
    refetch: false,
  };
  render() {
    const fetchPolicy = this.state.refetch ? 'network-only' : 'cache-first';
    return (
      <Center key={this.props.page}>
        <Pagination page={this.props.page} />
        <Query
          query={ALL_ITEMS_QUERY}
          variables={{
            skip: this.props.page * perPage - perPage,
            first: perPage,
          }}
          fetchPolicy={fetchPolicy}
        >
          {({ data, error, loading }) => {
            if (loading) return null;
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
