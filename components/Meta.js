import Head from 'next/head'
import Router from 'next/router'
import Nav from './Nav';

export default () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <Nav/>
      <link rel="shortcut icon" href="https://wesbos.com/wp-content/themes/wb2014/i/crown-yellow-small.png" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
      <title>Sick Fits</title>
    </Head>
  </div>
)
