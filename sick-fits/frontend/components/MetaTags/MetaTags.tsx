import Head from 'next/head';
import { FC } from 'react';

export interface HeadProps {

}

const MetaTags: FC<HeadProps> = () => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <link rel="shortcut icon" href="/static/favicon.png" />
    <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
    <title>Sick Fits!</title>
  </Head>
)
export default MetaTags;


