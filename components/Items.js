import { Component } from 'react';
import { withApollo, graphql, compose } from 'react-apollo';
import styled from 'styled-components';
import Pagination from './Pagination';
import Item from './Item';

import { ALL_ITEMS_QUERY, DELETE_ITEM_MUTATION } from '../queries';

const Title = styled.h1`font-size: 10px;`;

const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(4, calc(33% - 20px));
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
    // 1
    if (this.props.allItemsQuery && this.props.allItemsQuery.loading) {
      return <div>Loading</div>;
    }

    // 2
    if (this.props.allItemsQuery && this.props.allItemsQuery.error) {
      console.log(this.props.allItemsQuery.error);
      return <div>Error</div>;
    }

    // 3
    const itemsToRender = this.props.allItemsQuery.allItems;

    return (
      <div>
        <Pagination page={this.props.page} />
        <Title>Items For Sale</Title>
        <Items key={this.props.page}>{itemsToRender.map((item, i) => <Item key={item.id} item={item} />)}</Items>
      </div>
    );
  }
}

// 1

// We export the graphQL HOC - this will fetch the data and inject it into the ItemList compeont via props

// Create some Enhancers
const itemEnhancer = graphql(ALL_ITEMS_QUERY, {
  name: 'allItemsQuery',
  options({ page }) {
    return {
      variables: {
        skip: page * 3 - 3,
      },
    };
  },
});

const deleteItemEnhancer = graphql(DELETE_ITEM_MUTATION, {
  name: 'removeItemMutation',
  options: {
    update: (proxy, { data: { deleteItem } }) => {
      // grab the data from our cache
      const data = proxy.readQuery({ query: ALL_ITEMS_QUERY });

      // filter out the deleted item
      data.allItems = data.allItems.filter(item => item.id !== deleteItem.id);

      // and then "set state" (update cache), so it will update wherever we have used this data on the page
      proxy.writeQuery({ query: ALL_ITEMS_QUERY, data });
    },
  },
});

export default withApollo(compose(itemEnhancer, deleteItemEnhancer)(ItemList));
