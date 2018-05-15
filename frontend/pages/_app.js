import App, { Container } from 'next/app';
import { ApolloProvider } from 'react-apollo';
import withData from '../lib/withData';
import { CURRENT_USER_QUERY } from '../queries/queries.graphql';
import Page from '../components/Page';

// Next.js wraps each Page in an <App></App> component. This is handy for when you want to persist anything from page to page, or just access a component that is 1 level higher than each page.

// here we use App from next/app and wrap it with withData so we can get Apollo and SSR

class MyApp extends App {
  componentDidMount() {
    if (typeof window !== 'undefined' && !window.__CLIENTLOADED__) {
      console.log('Refetching current user');
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
  render() {
    const { Component, pageProps, apollo } = this.props;

    return (
      <Container>
        <ApolloProvider client={apollo}>
          <Page>
            <Component {...pageProps} />
          </Page>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withData(MyApp);
