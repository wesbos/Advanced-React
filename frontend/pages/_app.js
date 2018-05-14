import App, { Container } from 'next/app';
import React from 'react';
import withData from '../lib/withData';
import { withRouter } from 'next/router';

// Next.js wraps each Page in an <App></App> component. This is handy for when you want to persist anything from page to page, or just access a component that is 1 level higher than each page.

// This code is taken right from the Next.js docs, and then we add the Router to the page props, which is why we need a custom _app.js

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    console.log('GET INITITAL PROPS');
    let pageProps = {};
    const ComposedComponent = withData(Component);

    if (ComposedComponent.getInitialProps) {
      pageProps = await withData(Component).getInitialProps(ctx);
    }
    return { pageProps, query: ctx.query };
  }

  render() {
    console.log('RENDER');
    const { Component, pageProps, query } = this.props;
    const ComposedComponent = withData(Component);
    return (
      <Container>
        <ComposedComponent {...pageProps} query={query} />
      </Container>
    );
  }
}

export default MyApp;
