import Header from './Header'
import Meta from './Meta'
import withData from '../lib/withData';
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
    <Header />
    <Nav></Nav>
    <div>
      { children }
    </div>
  </StyledPage>
)

export default withData(Page);
