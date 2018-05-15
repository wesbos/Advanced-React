import React from 'react';
import { Mutation, Query } from 'react-apollo';
import { adopt } from 'react-adopt';
import TakeMyMoney from './TakeMyMoney';
import formatMoney from '../lib/formatMoney';
import CartItem from './CartItem';
import { CURRENT_USER_QUERY, LOCAL_STATE_QUERY, TOGGLE_CART_MUTATION } from '../queries/queries.graphql';
import calcTotalPrice from '../lib/calcTotalPrice';
import Error from './ErrorMessage';
import CartStyles from './styles/CartStyles';
import Supreme from './styles/Supreme';
import CloseButton from './styles/CloseButton';
import SickButton from './styles/SickButton';

const Composed = adopt({
  toggleCart: <Mutation mutation={TOGGLE_CART_MUTATION}>{() => {}}</Mutation>,
  localState: <Query query={LOCAL_STATE_QUERY}>{() => {}}</Query>,
  currentUser: (
    <Query query={CURRENT_USER_QUERY} data-test="cart">
      {() => {}}
    </Query>
  ),
});

const Cart = () => (
  <Composed>
    {({ toggleCart, localState, currentUser }) => {
      const { data: { me }, error, loading } = currentUser;
      if (loading) return <p>Loading...</p>;
      if (error) return <Error error={error} />;
      if (!me) return <p>Please Sign In!</p>;
      return (
        <CartStyles open={localState.data.cartOpen}>
          <header>
            <CloseButton title="close" onClick={toggleCart}>
              &times;
            </CloseButton>

            <Supreme>{me.name}'s Cart.</Supreme>
            <p>
              You have {me.cart.length} item{me.cart.length === 1 ? '' : 's'} in your cart.
            </p>
          </header>

          <ul>{me.cart.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem} />)}</ul>
          <footer>
            <p>{formatMoney(calcTotalPrice(me.cart))}</p>
            <TakeMyMoney>
              <SickButton>Checkout</SickButton>
            </TakeMyMoney>
          </footer>
        </CartStyles>
      );
    }}
  </Composed>
);

export default Cart;
