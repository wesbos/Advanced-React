import React from 'react';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import PropTypes from 'prop-types';
import Header from './Header';
import Meta from './Meta';
import { client } from '../lib/withData';
import { CURRENT_USER_QUERY } from '../queries/queries';

const theme = {
  red: '#FF0000',
  black: '#393939',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '1300px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
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
   line-height: 2;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  a {
    color: ${theme.black};
    text-decoration: none;
  }
`;

const Inner = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
`;

const StyledPage = styled.div`
  color: ${props => props.theme.black};
  background: white;
`;

class Page extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };
  componentDidMount() {
    // The first time we load in the client, we need to refetch the current user data
    if (typeof window !== 'undefined' && !window.__CLIENTLOADED__) {
      client.query({ query: CURRENT_USER_QUERY, fetchPolicy: 'network-only' });
      window.__CLIENTLOADED__ = true;
    }
  }
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage className="main">
          <Meta />
          <Header />
          <Inner>{this.props.children}</Inner>
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;
