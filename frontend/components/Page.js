import React from 'react';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import PropTypes from 'prop-types';
import Header from './Header';
import Meta from './Meta';
import { UIProvider } from './UIContext';
// Global Style

const theme = {
  red: '#FF0000',
  black: '#393939',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '1300px',
};

injectGlobal`
  html {
   box-sizing: border-box;
   font-size: 10px;
  }
  body {
   font-family: 'radnika next', sans-serif;
   padding: 0;
   background-color: #ffffff;
   margin: 0;
   font-size: 1.5rem;
   background: red;
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
  <UIProvider>
    <ThemeProvider theme={theme}>
      <StyledPage className="main">
        <Meta />
        <Header />
        {children}
      </StyledPage>
    </ThemeProvider>
  </UIProvider>
);
Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
