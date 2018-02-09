import { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import styled from 'styled-components';
import { CURRENT_USER_QUERY } from '../queries';
import RemoveFromCart from './RemoveFromCart';

const CartStyles = styled.div`
  background: white;
  border-radius: 10px;
  padding: 20px;
  overflow: hidden;
  display: flex;
  align-items: center;
`;

class Cart extends Component {
  componentDidMount() {
    console.log('refetching..');
    setTimeout(this.props.currentUser.refetch, 10);
  }
  render() {
    if (!this.props.currentUser.me) {
      return null;
    }
    // Check for loading state..
    // const { loading, error } = this.props.currentUserQuery;
    // const { user } = this.props.currentUserQuery;
    // if (loading || error || !user) return <p>Cart Loading...</p>;
    // const total = user.cart.reduce((a, b) => a + b.price, 0);

    const { me } = this.props.currentUser;
    console.log(me);
    return (
      <CartStyles className="cart">
        <p>🛒: {me.cart.length} Items</p>
        <ul>
          {me.cart.map(cartItem => (
            <li key={cartItem.id}>
              <strong>
                {cartItem.quantity} of {cartItem.item.title}
              </strong>
              <RemoveFromCart id={cartItem.id} />
            </li>
          ))}
        </ul>
        {/* There
        {user.cart.length === 1 ? ' is ' : 'are '}
        <ChaChing amount={user.cart.length} />
        {user.cart.length === 1 ? ' item ' : ' items '}
        in your cart totaling */}
        {/* <ChaChing amount={formatMoney(total)} /> */}
      </CartStyles>
    );
  }
}

const userEnhancer = graphql(CURRENT_USER_QUERY, { name: 'currentUser' });
export default compose(userEnhancer)(Cart);
