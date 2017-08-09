import React, { Component } from 'react'
import { graphql, compose } from 'react-apollo'
import UpdateItem from './UpdateItem';
import Link from 'next/link';
import styled from 'styled-components';

import { ALL_ITEMS_QUERY, DELETE_ITEM_MUTATION } from '../queries';

const Title = styled.h1`
  font-size: 50px;
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
      <div>
        <Title>Items For Sale</Title>
        {itemsToRender.map((item,i) => (
          <div className="item" key={i}>
            <hr/>
            { item.image ?  <img src={`https://images.graph.cool/v1/cj5xz8szs28930145gct82bdj/${item.image.secret}/300x300`} /> : null }
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <Link href={{
              pathname: '/admin/update',
              query: { id: item.id }
            }}>
              <a>Edit {item.id}</a>
            </Link>

            <UpdateItem id={item.id} />

            <button onClick={() => this.props.removeItemMutation({ variables: { id: item.id }})}>&times; Delete item</button>

          </div>
        ))}
      </div>
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
