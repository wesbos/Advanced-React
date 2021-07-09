import Page from '../components/Page'
// NProgress.js: a nanoscopic progress bar
import NProgress from 'nprogress';
import Router from 'next/router';
// todo: swap with our own
// import 'nprogress/nprogress.css';
import '../components/styles/nprogress.css'

Router.events.on('routeChangeStart', () => NProgress.start() );
Router.events.on('routeChangeComplete', () => NProgress.done() );
Router.events.on('routeChangeError', () => NProgress.done())


export default function MyApp({ Component, pageProps }) {
    return (
        <Page>
            <Component {...pageProps} />
        </Page>
    );
}