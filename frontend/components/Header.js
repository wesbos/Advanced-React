import { Component } from 'react';
import { compose } from 'react-apollo';
import { userEnhancer } from '../enhancers/enhancers';
import NProgress from 'nprogress';
import Router from 'next/router';
import styled from 'styled-components';
import Link from 'next/link';
import Cart from './Cart';
import Search from './Search';
import Nav from './Nav';

Router.onRouteChangeStart = url => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const StyledHeader = styled.header`
  .bar {
    border-bottom: 10px solid ${props => props.theme.black};
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
  }
  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid ${props => props.theme.lightgrey};
  }
`;

const Logo = styled.h1`
  font-size: 4rem;
  margin-left: 2rem;
  transform: skew(-5deg);
  a {
    padding: 1rem 1.5rem;
    background: ${props => props.theme.red};
    color: white;
    letter-spacing: -2px;
    text-transform: uppercase;
  }
`;

const Header = props => (
  <StyledHeader>
    <div className="bar">
      <Logo>
        <Link href="/">
          <a>Sick Fits!</a>
        </Link>
      </Logo>
      <Nav />
    </div>
    <div className="sub-bar">
      <Search />
    </div>
    <Cart />
  </StyledHeader>
);

export default compose(userEnhancer)(Header);
// export default Header;
