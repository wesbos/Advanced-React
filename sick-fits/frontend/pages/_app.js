import Page from '../components/Page.js';

export default function TheApp({Component, pageProps}) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}