import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

/**
 * Sets up the main DOM wrapper for the application. Think of this as
 * index.html
 */
export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();

    // grab all of the style components present on the page
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );

    // create the style tags
    const styleTags = sheet.getStyleElement();

    // inject the tags into props
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>{this.props.styleTags}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
