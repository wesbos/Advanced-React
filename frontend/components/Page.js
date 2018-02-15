import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import Header from './Header';
import Meta from './Meta';
import Nav from './Nav';
import CartList from './CartList';
import { Component } from 'react';

// Global Style

const theme = {
  red: '#FF0000',
  black: '#393939',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '1300px',
};

const globals = injectGlobal`
  html {
   box-sizing: border-box;
   font-size: 10px;
  }
  body {
   font-family: 'radnika next', sans-serif;
   padding: 0;
   background-color: #ffffff;
   background: blue;
   margin: 0;
   font-size: 1.5rem;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  a {
    color: ${theme.black};
    text-decoration: none;
  }
`;

const StyledPage = styled.div`
  color: ${props => props.theme.black};
  background: white;
`;

const Page = ({ children }) => (
  <ThemeProvider theme={theme}>
    <StyledPage className="main">
      <Meta />
      <Header />
      {children}
    </StyledPage>
  </ThemeProvider>
);

export default Page;
