import App, { Container } from 'next/app';
import React from 'react';
import withData from '../lib/withData';
import { withRouter } from 'next/router';

// Next.js wraps each Page in an <App></App> component. This is handy for when you want to persist anything from page to page, or just access a component that is 1 level higher than each page.

// This code is taken right from the Next.js docs, and then we add the Router to the page props, which is why we need a custom _app.js

let ComposedComponent;

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};
    ComposedComponent = withData(Component);

    if (ComposedComponent.getInitialProps) {
      pageProps = await ComposedComponent.getInitialProps(ctx);
    }
    pageProps.router = router;
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <ComposedComponent {...pageProps} />
      </Container>
    );
  }
}

export default withData(MyApp);
