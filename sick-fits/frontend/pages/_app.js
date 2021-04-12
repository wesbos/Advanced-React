import NProgress from 'nprogress';
import Router from 'next/router';
import Page from "../components/Page";
import '../components/styles/nprogress.css';
// ToDO: Swap with our own

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.error());

export default function MyApp({ Component, pageProps }) {
    return (
        <Page>
            <Component {...pageProps} />
        </Page>
    )
}