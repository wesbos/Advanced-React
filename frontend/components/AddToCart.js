import { Component } from 'react';
import { Mutation } from 'react-apollo';
import PropTypes from 'prop-types';
import { ADD_TO_CART_MUTATION, CURRENT_USER_QUERY } from '../queries/index';

class AddToCart extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
  };

  update = (proxy, payload) => {
    console.log('Updating!');
    console.log(payload);
    const newCartItem = payload.data.addToCart;
    const data = proxy.readQuery({ query: CURRENT_USER_QUERY });
    console.log(newCartItem);

    const existingIndex = data.me.cart.findIndex(cartItem => cartItem.id === newCartItem.id);
    if (existingIndex >= 0) {
      // already in cache, just replace it
      data.me.cart = [...data.me.cart.slice(0, existingIndex), newCartItem, ...data.me.cart.slice(existingIndex + 1)];
    } else {
      data.me.cart = [...data.me.cart, newCartItem];
    }
    proxy.writeQuery({ query: CURRENT_USER_QUERY, data });
  };

  render() {
    const { id } = this.props;
    return (
      <Mutation mutation={ADD_TO_CART_MUTATION} variables={{ id }} update={this.update}>
        {(addToCart, { loading }) => (
          <button disabled={loading} onClick={addToCart}>
            🛒 Add{loading && 'ing'} To Cart
          </button>
        )}
      </Mutation>
    );
  }
}

export default AddToCart;
