import React from 'react';
import Head from 'next/head';
import { injectGlobal } from 'styled-components';

const Meta = () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {injectGlobal`
          html {
            background: white;
          }
        `}
      <meta charSet="utf-8" />
      <link rel="shortcut icon" href="https://wesbos.com/wp-content/themes/wb2014/i/crown-yellow-small.png" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
      <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />

      <title>Sick Fits</title>
    </Head>
  </div>
);

export default Meta;
