import Document, { Html, Head, NextScript, Main } from 'next/Document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
    static getInitialProps({ renderPage }) {
        const sheet = new ServerStyleSheet();
        const page = renderPage((App) => (props) => sheet.collectStyles(<App {...props} />));
        const styleTags = sheet.getStyleElement();
        return {...page, styleTags }
    }
    render() {
        return (
            <Html lang="en">
            <Head></Head>
            <body>
                <Main />
                <NextScript />
            </body>
            </Html>
        );
    };
}