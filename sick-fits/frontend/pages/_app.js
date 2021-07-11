import Page from '../components/Page'
// NProgress.js: a nanoscopic progress bar
import NProgress from 'nprogress';
import Router from 'next/router';
import { ApolloProvider } from '@apollo/client';
import withData from '../lib/withData';
// todo: swap with our own
// import 'nprogress/nprogress.css';
import '../components/styles/nprogress.css'

Router.events.on('routeChangeStart', () => NProgress.start() );
Router.events.on('routeChangeComplete', () => NProgress.done() );
Router.events.on('routeChangeError', () => NProgress.done())


function MyApp({ Component, pageProps, apollo }) {
    // console.log(apollo);
    return (
        <ApolloProvider client={apollo}>
        <Page>
            <Component {...pageProps} />
        </Page>
        </ApolloProvider>
    );
}

MyApp.getInitialProps = async function({ Component, ctx }) {
    let pageProps = {};
    if(Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
    }
    pageProps.query = ctx.query;
    return { pageProps };
}

export default withData(MyApp);