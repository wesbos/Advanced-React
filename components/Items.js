import { Component } from 'react'
import { withApollo, graphql, compose } from 'react-apollo'
import UpdateItem from './UpdateItem';
import Link from 'next/link';
import styled from 'styled-components';
import TakeMyMoney from './TakeMyMoney';
import AddToCart from './AddToCart';
import Pagination from './Pagination';
import formatMoney from '../lib/formatMoney';
import makeImage from '../lib/image';
import slugify from 'slugify';

import { ALL_ITEMS_QUERY, DELETE_ITEM_MUTATION } from '../queries';

const Title = styled.h1`
  font-size: 10px;
`;

const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(4, calc(33% - 20px));
  grid-gap: 20px;
`;

const Item = styled.div`
  background: #f3f3f3;
  padding: 5px;
  img {
    width: 100%;
  }
`;

class ItemList extends Component {

  componentDidMount() {
    this.prefetchNextItems(this.props.page);
  }

  componentWillReceiveProps(nextProps) {
    // update the next items if the page prop changed
    if(this.props.page !== nextProps.page) {
      this.prefetchNextItems(nextProps.page);
    }
  }

  prefetchNextItems = (currentPage) => {
    const page = currentPage + 1;
    console.log(`Prefetching Next items! Page ${page}`);
    this.props.client.query({
      query: ALL_ITEMS_QUERY,
      variables: {
        skip: (page * 3) - 3
      }
    })
  }

  render() {
    console.log("CLIENTTT!!", this.props.client);

    // 1
    if (this.props.allItemsQuery && this.props.allItemsQuery.loading) {
      return <div>Loading</div>
    }

    // 2
    if (this.props.allItemsQuery && this.props.allItemsQuery.error) {
      console.log(this.props.allItemsQuery.error)
      return <div>Error</div>
    }

    // 3
    const itemsToRender = this.props.allItemsQuery.allItems;

    return (
      <div>
        <Pagination page={this.props.page}></Pagination>
        <Title>Items For Sale</Title>
        <Items>
          {itemsToRender.map((item,i) => (
            <Item className="item" key={i}>
              { item.image ?  <img key={item.image.secret} src={makeImage(item.image)} /> : null }
              <h3>
                <Link href={{
                  pathname: 'item',
                  query: {
                    slug: slugify(item.title),
                    itemId: item.id
                  },
                }}>
                  <a>{item.title}</a>
                </Link>
              </h3>

              <p>{item.description}</p>
              <Link href={{
                pathname: '/admin/update',
                query: { id: item.id }
              }}>
                <a>Edit ✏️</a>
              </Link>

              <TakeMyMoney
                id={item.id}
                amount={item.price}
                name={item.title} // the pop-in header title
                description={item.description} // the pop-in header subtitle
                image={makeImage(item.image)}
              >
                <button>Buy for {formatMoney(item.price)}</button>
              </TakeMyMoney>

              <AddToCart id={item.id}></AddToCart>
              <button onClick={() => this.props.removeItemMutation({ variables: { id: item.id }})}>&times; Delete item</button>

            </Item>
          ))}
        </Items>

      </div>
    )
  }

}

// 1

// We export the graphQL HOC - this will fetch the data and inject it into the ItemList compeont via props

// Create some Enhancers
const itemsEnahncer = graphql(ALL_ITEMS_QUERY, { name: 'allItemsQuery', options({ page }) {
  return {
    variables: {
      skip: (page * 3) - 3
    },
  }
}});

const deleteItemEnhancer = graphql(DELETE_ITEM_MUTATION, {
  name: 'removeItemMutation',
  options: {
    update: (proxy, { data: { deleteItem } }) => {

      // grab the data from our cache
      const data = proxy.readQuery({ query: ALL_ITEMS_QUERY });

      // filter out the delted item
      data.allItems = data.allItems.filter(item => item.id !== deleteItem.id);

      // and then "set state" (update cache), so it will update whereever we have used this data on the page
      proxy.writeQuery({ query: ALL_ITEMS_QUERY, data });

    },
  }
});

export default withApollo(compose(itemsEnahncer, deleteItemEnhancer)(ItemList));
