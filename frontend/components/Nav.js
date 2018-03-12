import Link from 'next/link';
import styled from 'styled-components';
import { Fragment } from 'react';
import { userEnhancer } from '../enhancers/enhancers';
import { compose } from 'react-apollo';
import CartCount from './CartCount';
import Signout from './Signout';
import { UIContext } from './UIContext';

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
  componentDidMount() {
    this.props.currentUser.refetch();
  }
  render() {
    const { currentUser } = this.props;
    return (
      <StyledUl>
        <Link prefetch href="/items">
          <a>Shop</a>
        </Link>
        <Link prefetch href="/add">
          <a>Sell</a>
        </Link>

        {!currentUser.me && (
          <Link prefetch href="/signup">
            <a>Sign In</a>
          </Link>
        )}

        {currentUser.me && (
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
                    count={currentUser.me.cart.reduce((tally, cartItem) => tally + cartItem.quantity, 0)}
                  />
                </button>
              )}
            </UIContext>
          </Fragment>
        )}
      </StyledUl>
    );
  }
}

export default compose(userEnhancer)(Nav);
