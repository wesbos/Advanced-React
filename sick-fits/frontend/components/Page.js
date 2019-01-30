import React, { Component } from 'react'
import styled, {ThemeProvider, injectGlobal } from 'styled-components';

import Header from './Header';
import Meta from './Meta';

const theme = {
  gunmetal: '#292F36',
  blue: '#087F8C',
  grey: '#747572',
  lightGray: '#E1E1E1',
  white: '#F7F9F9',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
  lgBreak: '1300px',
};

injectGlobal` 
  @font-face {
    font-family: 'radnika_next' ;
    src: url('/static/radnikanext-medium-webfont.woff2')
    format('woff2');
     font-weight: normal;
     font-style: normal;
  }
  html{
    box-sizing: border-box;
    font-size: 10px;
  }

  *, *:before, *:after, {
    box-sizing: inherit;
  }

  body{
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'radnika_next';
  }
  a{
    text-decoration: none;
    color: ${theme.gunmetal};
  }
`;

const StyledPage = styled.div`
  color: ${props => props.theme.gunmetal};
  background: white;
`;
const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;
// Page component used for Theming, styling etc etc
class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta/>
          <Header/>
            <Inner>{this.props.children}</Inner>
        </StyledPage>
      </ThemeProvider>   
    )
  }
}
export default Page;