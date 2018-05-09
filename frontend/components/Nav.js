import React, { Fragment } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { Query } from 'react-apollo';
import { CURRENT_USER_QUERY } from '../queries/queries';
import CartCount from './CartCount';
import Signout from './Signout';
import { ApolloConsumer } from 'react-apollo';

import NavStyles from './styles/NavStyles';

class Nav extends React.Component {
  render() {
    return (
      <Query query={CURRENT_USER_QUERY}>
        {({ data: { me } }) => (
          <NavStyles data-test="nav">
            <Link href="/items">
              <a>Shop</a>
            </Link>
            <Link href="/add">
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
      </Query>
    );
  }
}

export default Nav;
