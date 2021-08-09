/* eslint-disable react/jsx-props-no-spreading */
import propTypes from 'prop-types';
import Page from '../components/Page';

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    <Page cool="This is a test">
      <Component {...pageProps} />
    </Page>
  );
}

App.PageProps = {
  Component: propTypes.any,
  pageProps: propTypes.oneOf([propTypes.any, propTypes.arrayOf(propTypes.any)]),
};
