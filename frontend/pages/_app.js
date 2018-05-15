import App, { Container } from 'next/app';
import React from 'react';
import { ApolloApp } from 'next-with-apollo';
import withData from '../lib/withData';

// Next.js wraps each Page in an <App></App> component. This is handy for when you want to persist anything from page to page, or just access a component that is 1 level higher than each page.

// This code is taken right from the Next.js docs, and then we add the Router to the page props, which is why we need a custom _app.js

class MyApp extends ApolloApp {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    pageProps.query = ctx.query

    return { pageProps };
  }
}

export default withData(MyApp);
