import React, { Fragment } from 'react';
import Link from 'next/link';
import { Query, Mutation } from 'react-apollo';
import { TOGGLE_CART_MUTATION } from './Cart';
import User from './User';
import CartCount from './CartCount';
import Signout from './Signout';
import NavStyles from './styles/NavStyles';

class Nav extends React.Component {
  render() {
    // below we set the fetchPolicy to network only so it forces re-fetch on the server
    return (
      <User>
        {({ data: { me } }) => (
          <NavStyles data-test="nav">
            <Link href="/items">
              <a>Shop</a>
            </Link>
            <Link href="/sell">
              <a>Sell</a>
            </Link>

            {!me && (
              <Link href="/signup">
                <a>Sign In</a>
              </Link>
            )}

            {me && (
              <Fragment>
                <Link href="/orders">
                  <a>Orders</a>
                </Link>
                <Link href="/me">
                  <a>My Account</a>
                </Link>
                <Signout />
                <Mutation mutation={TOGGLE_CART_MUTATION}>
                  {toggleCart => (
                    <button onClick={toggleCart}>
                      My Cart
                      <CartCount
                        className="cart-count"
                        count={me.cart.reduce((tally, cartItem) => tally + cartItem.quantity, 0)}
                      />
                    </button>
                  )}
                </Mutation>
              </Fragment>
            )}
          </NavStyles>
        )}
      </User>
    );
  }
}

export default Nav;
