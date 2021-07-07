import Document, { Html, Head, NextScript, Main } from 'next/Document';
export default class MyDocument extends Document {
    render() {
        <Html lang="en">
            {/* <Head></Head> */}
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    };
}