import { FC, ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';
import Header from '../Header';
import MetaTags from '../MetaTags';
import theme from '../styles/Theme.styled';
import { StyledPage, Inner } from './Page.styled';
import GlobalStyle from '../styles/Global.styled';



export interface PageProps {
  children?: ReactElement
}

const Page: FC<PageProps> = props => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <StyledPage>
        <MetaTags />
        <Header />
        <Inner>
          {props.children}
        </Inner>
      </StyledPage>
    </>
  </ThemeProvider>
);

export default Page;