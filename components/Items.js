import { Component } from 'react'
import { graphql, compose } from 'react-apollo'
import UpdateItem from './UpdateItem';
import Link from 'next/link';
import styled from 'styled-components';
import TakeMyMoney from './TakeMyMoney';
import formatMoney from '../lib/formatMoney';
import makeImage from '../lib/image';

import { ALL_ITEMS_QUERY, DELETE_ITEM_MUTATION } from '../queries';

const Title = styled.h1`
  font-size: 50px;
`;



const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(4, calc(25% - 20px));
  grid-gap: 20px;
`;

const Item = styled.div`
  background: #f3f3f3;
  padding: 20px;
  img {
    width: 100%;
  }
`;

class ItemList extends Component {

  render() {

    // 1
    if (this.props.allLinksQuery && this.props.allLinksQuery.loading) {
      return <div>Loading</div>
    }

    // 2
    if (this.props.allLinksQuery && this.props.allLinksQuery.error) {
      console.log(this.props.allLinksQuery.error)
      return <div>Error</div>
    }

    // 3
    const itemsToRender = this.props.allLinksQuery.allItems

    return (
      <Items>
        <Title>Items For Sale</Title>
        {itemsToRender.map((item,i) => (
          <Item className="item" key={i}>
            { item.image ?  <img src={makeImage(item.image)} /> : null }
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <Link href={{
              pathname: '/admin/update',
              query: { id: item.id }
            }}>
              <a>Edit {item.id}</a>
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
            <button onClick={() => this.props.removeItemMutation({ variables: { id: item.id }})}>&times; Delete item</button>

          </Item>
        ))}
      </Items>
    )
  }

}

// 1

// We export the graphQL HOC - this will fetch the data and inject it into the ItemList compeont via props

// Create some Enhancers
const itemsEnahncer = graphql(ALL_ITEMS_QUERY, { name: 'allLinksQuery' });
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

export default compose(itemsEnahncer, deleteItemEnhancer)(ItemList)
