import Link from 'next/link';
import styled from 'styled-components';
import { userEnhancer } from '../enhancers/enhancers';
import { compose } from 'react-apollo';
import ToggleCart from './ToggleCart';

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
  .cart-count {
    background: ${props => props.theme.red};
    color: white;
    border-radius: 50%;
    padding: 5px;
    margin-left: 1rem;
    font-weight: 100;
    font-feature-settings: 'tnum';
    font-variant-numeric: tabular-nums;
  }
`;

const Nav = ({ currentUser }) => (
  <StyledUl>
    <Link prefetch href="/items">
      <a>Shop</a>
    </Link>
    <Link prefetch href="/add">
      <a>Sell</a>
    </Link>
    <Link prefetch href="/signup">
      <a>Sign Up</a>
    </Link>
    <Link prefetch href="/orders">
      <a>Orders</a>
    </Link>
    {currentUser.me ? (
      <ToggleCart
        render={toggle => (
          <button onClick={toggle}>
            My Cart
            <span className="cart-count">
              {currentUser.me.cart.reduce((tally, cartItem) => tally + cartItem.quantity, 0)}
            </span>
          </button>
        )}
      />
    ) : null}
  </StyledUl>
);

export default compose(userEnhancer)(Nav);
