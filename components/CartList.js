import { Component } from 'react';
import withData from '../lib/withData';
import Items from '../components/Items';
import Signup from '../components/Signup';
import LoginAuth0 from '../components/LoginAuth0';
import Page from '../components/Page';
import { USER_ORDERS_QUERY } from '../queries';
import { graphql, compose } from 'react-apollo'
import has from 'lodash.has';
import get from 'lodash.get';
import formatMoney from '../lib/formatMoney';
import makeImage from '../lib/image';
import TakeMyMoney from './TakeMyMoney'

import { CURRENT_USER_QUERY, REMOVE_FROM_CART_MUTATION } from '../queries';

class CartList extends Component {
  componentDidMount() {
    setTimeout(this.props.currentUserQuery.refetch, 1);
  }
  render() {

    if(this.props.loading) {
      return <p>Loading...</p>
    }

    if(this.props.error) {
      return <p>Error...</p>
    }

    if(!has(this.props, 'currentUserQuery.user.cart')) {
      return <p>Don't have it yet!</p>
    }

    const cart = this.props.currentUserQuery.user.cart;
    const userId = this.props.currentUserQuery.user.id;

    const total = cart.reduce((a, b) => a + b.price, 0);
    return (
      <div>
        <h1>{cart.length} Items</h1>
        <ul>
          {cart.map(item => (
            <li key={item.id}>
              {item.title}
              <button onClick={() => this.props.removeFromCart({ variables: {
                userId,
                itemId: item.id
              }})}>&times; Delete</button>
            </li>
          ))}
        </ul>
        <TakeMyMoney
          amount={total}
          name="Testing 123"
          description="Test test 123"
        >
          <button>Buy for {formatMoney(total)}</button>
        </TakeMyMoney>
      </div>
    )
  }
}

const userEnhancer = graphql(CURRENT_USER_QUERY, { name: 'currentUserQuery' });
const removeItemEnhancer = graphql(REMOVE_FROM_CART_MUTATION, { name: 'removeFromCart', options: {
    update: (proxy, payload) => {
      const data = proxy.readQuery({ query: CURRENT_USER_QUERY });
      const cartItemId = payload.data.removeFromCartItems.cartItem.id;
      data.user.cart = data.user.cart.filter(item => item.id !== cartItemId);
      proxy.writeQuery({ query: CURRENT_USER_QUERY, data });
    },
  } });
export default compose(userEnhancer, removeItemEnhancer)(CartList)
