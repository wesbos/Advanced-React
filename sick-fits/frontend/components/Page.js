import React from 'react';
import Header from "./Header";
import Meta from "./Meta";
import styled, { ThemeProvider, InjectGlobal } from "styled-components";

const theme = {
  red: "#FF0000",
  black: "#393939",
  grey: "#3A3A3A",
  lightgrey: "#E1E1E1",
  offWhite: "#EDEDED",
  maxWidth: "1000px",
  bs: "0 12px 24px 0 rggba(0, 0, 0, .99)"
};

const StyledPage = styled.div`
  background: #FFFFFF;
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;

class Page extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta/>
          <Header/>
          <Inner>
            { this.props.children }
          </Inner>
        </StyledPage>
      </ThemeProvider>
    )
  }
}

export default Page;
