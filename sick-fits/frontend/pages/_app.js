import App, { Container } from 'next/app';
import Page from '../components/Page';
// myApp is used as overall layout of application
import  { ApolloProvider } from 'react-apollo';
import withData from '../lib/withData';
class MyApp extends App {
  // needed to receive page number from Nextjs 
  // SPECICALLY FOR SERVER SIDE RENDER
  // getInitialProps runs BEFORE Render()
  // getInitialProps fires off and crawls the page 
  // -> looking for queries that need to be fired off before page render
  static async getInitialProps({Component, ctx}){
    let pageProps = {};
    if(Component.getInitialProps){
      // receive ctx from component and set that to be pageProps
      pageProps = await Component.getInitialProps(ctx);

    }
    // this exposes the query to the user
     pageProps.query = ctx.query;
     return { pageProps };
  }
  render(){
    // destructor component from props and render it out 
    const { Component, apollo, pageProps  } = this.props;
    // <Component /> refers to {this.props.children} for Page.js
    return(
      <Container>
        <ApolloProvider client={apollo}>
          <Page>
            <Component />
          </Page>
        </ApolloProvider>
      </Container>
    )
  }
}

export default withData(MyApp);