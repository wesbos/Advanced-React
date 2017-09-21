import Header from './Header';
import Meta from './Meta';
import Nav from './Nav';
import styled from 'styled-components';

const StyledPage = styled.div`
  font-family: sans-serif;
  color: #303030;
  background: #efc600;
  padding: 100px;
`;

const Page = ({ children }) => (
  <StyledPage className="main">
    <Meta />
    <Nav />
    <Header />
    {children}
  </StyledPage>
);

export default Page;
