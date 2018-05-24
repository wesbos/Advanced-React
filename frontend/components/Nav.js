import React, { Fragment } from 'react';
import Link from 'next/link';
import { Query, ApolloConsumer } from 'react-apollo';
import User from './User';
import CartCount from './CartCount';
import Signout from './Signout';
import NavStyles from './styles/NavStyles';

class Nav extends React.Component {
  render() {
    // below we set the fetchPolicy to network only so it forces re-fetch on the server
    return (
      <User>
        {({ data: { me }, error }) => (
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
                <ApolloConsumer>
                  {cache => (
                    <button onClick={() => cache.writeData({ data: { cartOpen: true } })}>
                      My Cart
                      <CartCount
                        className="cart-count"
                        count={me.cart.reduce((tally, cartItem) => tally + cartItem.quantity, 0)}
                      />
                    </button>
                  )}
                </ApolloConsumer>
              </Fragment>
            )}
          </NavStyles>
        )}
      </User>
    );
  }
}

export default Nav;
