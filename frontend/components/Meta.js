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
      <link rel="shortcut icon" href="/static/favicon.png" />
      <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />

      <title>Sick Fits</title>
    </Head>
  </div>
);

export default Meta;
