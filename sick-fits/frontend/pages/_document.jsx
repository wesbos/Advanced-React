import Document, { Html, NextScript, Main, Head } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage((App) => (props) =>
      // eslint-disable-next-line react/jsx-props-no-spreading
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleTags();
    console.log(styleTags);
    return { ...page, styleTags };
  }

  render() {
    return (
      <>
        <Html>
          <Head />
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      </>
    );
  }
}
