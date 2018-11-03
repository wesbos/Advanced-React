import App, { Container } from "next/app";
import { ApolloProvider } from "react-apollo";
import withData from "../lib/withData";

import Page from "../components/Page";

/**
 * Entire app wrapper.
 * This component creates/sets up all of the top level props/contexts for the data
 * the rest of the app will use
 */
class MyApp extends App {
  // nextjs lifecycle, autoruns before the first render
  // this crawls the page, and any time it runs into a query, itll expose it to the page
  // this works in ServerSide render
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    // this exposes the query to the user
    pageProps.query = ctx.query;

    return pageProps;
  }

  render() {
    const { Component, apollo, pageProps } = this.props;

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
