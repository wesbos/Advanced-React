import React, { Fragment } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { Query } from 'react-apollo';
import { CURRENT_USER_QUERY } from '../queries/index';
import CartCount from './CartCount';
import Signout from './Signout';
import { UIContext } from './UIContext';
import Dump from './Dump';

const StyledUl = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-self: end;
  a,
  button {
    padding: 0 30px;
    display: flex;
    align-items: center;
    position: relative;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 2rem;
    background: none;
    border: 0;
    cursor: pointer;
    &:before {
      content: '';
      width: 1px;
      background: ${props => props.theme.lightgrey};
      height: 100%;
      left: 0;
      position: absolute;
      transform: rotate(20deg);
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
      transition: width 0.6s;
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
`;

class Nav extends React.Component {
  render() {
    return (
      <Query query={CURRENT_USER_QUERY}>
        {({ data: { me }, refetch, loading, error }) => (
          <StyledUl>
            <Link prefetch href="/items">
              <a>Shop</a>
            </Link>
            <button
              onClick={() => {
                console.log('refetching!!');
                refetch()
                  .then(console.log)
                  .catch(console.error);
                console.log('done');
              }}
            >
              Refetch User
            </button>
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
                <UIContext>
                  {context => (
                    <button onClick={context.toggle}>
                      My Cart
                      <CartCount
                        className="cart-count"
                        count={me.cart.reduce((tally, cartItem) => tally + cartItem.quantity, 0)}
                      />
                    </button>
                  )}
                </UIContext>
              </Fragment>
            )}
          </StyledUl>
        )}
      </Query>
    );
  }
}

export default Nav;
