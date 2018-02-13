import styled from 'styled-components';
import Header from './Header';
import Meta from './Meta';
import Nav from './Nav';
import CartList from './CartList';
import { Component } from 'react';

class ErrorBoundary extends Component {
  state = {
    error: null,
    errorInfo: null,
  };
  componentDidCatch(error, errorInfo) {
    console.log('Caught an erorrror!');
    this.setState({ error, errorInfo });
  }
  render() {
    if (this.state.error) {
      return <p>Shit! AN error! {this.state.error.message}</p>;
    }
    return this.props.children;
  }
}

const StyledPage = styled.div`
  font-family: sans-serif;
  color: #303030;
  background: #efc600;
  padding: 100px;
`;

const Page = ({ children }) => (
  <StyledPage className="main">
    <ErrorBoundary>
      <Meta />
      <Nav />
      <Header />
      {/* <CartList /> */}
      {children}
    </ErrorBoundary>
  </StyledPage>
);

export default Page;
