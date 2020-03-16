import Link from 'next/link';
import { Mutation } from 'react-apollo';
import { TOGGLE_CART_MUTATION } from './Cart';
import NavStyles from './styles/NavStyles';
import User from './User';
import CartCount from './CartCount';
import Signout from './Signout';
import styled from 'styled-components';


const Logo = styled.h1`
  font-size: 4rem;
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  /* transform: skew(-7deg); */
  a {
    padding: 0.5rem 1rem;
    /* background: ${props => props.theme.offWhite}; */
    color: ${props => props.theme.black};
    /* text-transform: uppercase; */
    text-decoration: none;
  }
  @media (max-width: 1300px) {
    margin: 0;
    text-align: center;
  }
`;


const Nav = () => (
  <User>
    {({ data }) => {
      const me = data ? data.me : null
      return (
      <NavStyles data-test="nav">
        <Logo>
          <Link href="/">
            <a>Boostrbox</a>
          </Link>
       </Logo>
        {/* <Link href="/items">
          <a>Shop</a>
        </Link> */}
        {me && (
          <>
            <Link href="/sell">
              <a>Sell</a>
            </Link>
            <Link href="/orders">
              <a>Orders</a>
            </Link>
            <Link href="/me">
              <a>Account</a>
            </Link>
            <Signout />
            <Mutation mutation={TOGGLE_CART_MUTATION}>
              {(toggleCart) => (
                <button onClick={toggleCart}>
                  My Cart
                  <CartCount count={me.cart.reduce((tally, cartItem) => tally + cartItem.quantity, 0)}></CartCount>
                </button>
              )}
            </Mutation>
          </>
        )}
        {!me && (
          <Link href="/signup">
            <a>Sign In</a>
          </Link>
        )}
      </NavStyles>
    )
    }}
  </User>
);

export default Nav;
