import { ApolloApp } from 'next-with-apollo';
import withData from '../lib/withData';
import { CURRENT_USER_QUERY } from '../queries/queries.graphql';

// Next.js wraps each Page in an <App></App> component. This is handy for when you want to persist anything from page to page, or just access a component that is 1 level higher than each page.

// normall here you import App from next/app, but we use next-with-apollo's ApolloApp here so we can get SSR

class MyApp extends ApolloApp {
  componentDidMount() {
    if (typeof window !== 'undefined' && !window.__CLIENTLOADED__) {
      this.props.apollo.query({ query: CURRENT_USER_QUERY, fetchPolicy: 'network-only' });
      window.__CLIENTLOADED__ = true;
    }
  }
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    pageProps.query = ctx.query;

    return { pageProps };
  }
}

export default withData(MyApp);
