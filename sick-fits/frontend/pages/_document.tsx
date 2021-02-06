import Document, {
  Html,
  Head,
  NextScript,
  Main,
  DocumentContext,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(context: DocumentContext) {
    /*
      This is boilerplate required for Next.js
      to properly render your CSS-in-JS styles
      on the server.

      If not, Next.js server will render different class names
      than your CSS-in-JS solution will create when it executes client-side.

      This implementation is specific for styled-components.

      Another note: after doing this, you may need to delete the .next folder.
      This is because .next caches app data, like the server rendered HTML, which
      will need to be busted in order for the CSS-in-JS classes to be properly server rendered.
    */
    const sheet = new ServerStyleSheet();
    const originalRenderPage = context.renderPage;

    context.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
      });

    const intialProps = await Document.getInitialProps(context);

    return {
      ...intialProps,
      styles: (
        <>
          {intialProps.styles}
          {sheet.getStyleElement()}
        </>
      ),
    };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
