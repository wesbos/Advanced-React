import App, { Container } from 'next/app';
import Page from '../components/Page';
// myApp is used as overall layout of application
class MyApp extends App {
  render(){
    // destructor component from props and render it out 
    const { Component } = this.props;
    // <Component /> refers to {this.props.children} for Page.js
    return(
      <Container>
        <Page>
          <Component />
        </Page>
      </Container>
    )
  }
}

export default MyApp;