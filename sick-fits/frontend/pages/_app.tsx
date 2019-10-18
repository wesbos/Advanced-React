import React from 'react';
import App, { Container } from 'next/app';
import Page from '../components/Page';
import { ApolloProvider } from '@apollo/react-hooks';
import withData from '../lib/withData';

class MyApp extends App<any> {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  static async getInitialProps({ Component, ctx }) {
    let pageProps: any = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    pageProps.query = ctx.query
    return { pageProps }
  }

  render() {
    const { Component, pageProps, apollo } = this.props;

    return (
      <ApolloProvider client={apollo}>
        <Container>
          <Page>
            <Component {...pageProps} />
          </Page>
        </Container>
      </ApolloProvider>

    );
  }
}

export default withData(MyApp);
