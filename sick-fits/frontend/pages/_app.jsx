/* eslint-disable react/jsx-props-no-spreading */
// TODO swap with our own
import NProgress from 'nprogress';
import Router from 'next/router';
import '../components/styles/nprogress.css';
import propTypes from 'prop-types';
import { ApolloProvider } from '@apollo/client';

import Page from '../components/Page';
import withData from '../lib/withData';
import { CartStateProvider } from '../lib/contexts/cartContext';

NProgress.configure({ showSpinner: true, trickle: true });
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

// eslint-disable-next-line react/prop-types
function App({ Component, pageProps, apollo }) {
  return (
    <ApolloProvider client={apollo}>
      <CartStateProvider>
        <Page>
          <Component {...pageProps} />
        </Page>
      </CartStateProvider>
    </ApolloProvider>
  );
}

App.getInitialProps = async function ({ Component, ctx }) {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  pageProps.query = ctx.query;
  return { pageProps };
};

App.PageProps = {
  Component: propTypes.any,
  pageProps: propTypes.oneOf([propTypes.any, propTypes.arrayOf(propTypes.any)]),
};

export default withData(App);
