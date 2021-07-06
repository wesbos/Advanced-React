import PropTypes from 'prop-types';
import Page from '../components/Page';

export default function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}

MyApp.propTypes = {
  pageProps: PropTypes.any,
  Component: PropTypes.node,
};
