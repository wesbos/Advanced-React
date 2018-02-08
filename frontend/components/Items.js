import { Component } from 'react';
import { withApollo, graphql, compose } from 'react-apollo';
import styled from 'styled-components';
import Pagination from './Pagination';
import Item from './Item';
import { itemEnhancer } from '../enhancers/enhancers';

import { ALL_ITEMS_QUERY, DELETE_ITEM_MUTATION } from '../queries';

const Title = styled.h1`
  font-size: 10px;
`;

const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
`;

class ItemList extends Component {
  componentDidMount() {
    this.prefetchNextItems(this.props.page);
  }

  componentWillReceiveProps(nextProps) {
    // update the next items if the page prop changed
    if (this.props.page !== nextProps.page) {
      this.prefetchNextItems(nextProps.page);
    }
  }

  prefetchNextItems = currentPage => {
    const page = currentPage + 1;
    console.log(`Prefetching Next items! Page ${page}`);
    this.props.client.query({
      query: ALL_ITEMS_QUERY,
      variables: {
        skip: page * 3 - 3,
      },
    });
  };

  render() {
    console.log(this.props);
    // 1
    if (this.props.itemsQuery && this.props.itemsQuery.loading) {
      return <div>Loading</div>;
    }

    // 2
    if (this.props.itemsQuery && this.props.itemsQuery.error) {
      console.log(this.props.itemsQuery.error);
      return <div>Error</div>;
    }
    console.log(this.props);
    // 3
    const itemsToRender = this.props.itemsQuery.items;

    return (
      <div>
        <Pagination page={this.props.page} />
        <Title>Items For Sale</Title>
        <Items key={this.props.page}>{itemsToRender.map((item, i) => <Item key={item.id} item={item} />)}</Items>
      </div>
    );
  }
}

export default withApollo(compose(itemEnhancer)(ItemList));
