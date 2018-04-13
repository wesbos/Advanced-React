import React, { Fragment } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { Query } from 'react-apollo';
import { CURRENT_USER_QUERY, LOCAL_STATE_QUERY } from '../queries/queries';
import CartCount from './CartCount';
import Signout from './Signout';
import { ApolloConsumer } from 'react-apollo';

const StyledUl = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-self: end;
  font-size: 2rem;
  a,
  button {
    padding: 1rem 3rem;
    display: flex;
    align-items: center;
    position: relative;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 1em;
    background: none;
    border: 0;
    cursor: pointer;
    @media (max-width: 700px) {
      font-size: 10px;
      padding: 0 10px;
    }
    &:before {
      content: '';
      width: 2px;
      background: ${props => props.theme.lightgrey};
      height: 100%;
      left: 0;
      position: absolute;
      transform: skew(-20deg);
      top: 0;
      bottom: 0;
    }
    &:after {
      height: 2px;
      background: red;
      content: '';
      width: 0;
      position: absolute;
      transform: translateX(-50%);
      transition: width 0.4s;
      transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
      left: 50%;
      margin-top: 2rem;
    }
    &:hover,
    &:focus {
      outline: none;
      &:after {
        width: calc(100% - 60px);
      }
    }
  }
  @media (max-width: 1300px) {
    border-top: 1px solid ${props => props.theme.lightgrey};
    width: 100%;
    justify-content: center;
    font-size: 1.5rem;
  }
`;

class Nav extends React.Component {
  componentDidMount() {
    console.log('NAV MOUNTED');
  }
  render() {
    return (
      <Query query={CURRENT_USER_QUERY} ssr={false}>
        {({ data: { me }, refetch }) => (
          <StyledUl>
            <Link prefetch href="/items">
              <a>Shop</a>
            </Link>
            <Link prefetch href="/add">
              <a>Sell</a>
            </Link>

            {!me && (
              <Link prefetch href="/signup">
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
                {/* <UIContext>
                  {context => (
                    <button onClick={context.toggle}>
                      My Cart
                      <CartCount
                        className="cart-count"
                        count={me.cart.reduce((tally, cartItem) => tally + cartItem.quantity, 0)}
                      />
                    </button>
                  )}
                </UIContext> */}
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
          </StyledUl>
        )}
      </Query>
    );
  }
}

export default Nav;
