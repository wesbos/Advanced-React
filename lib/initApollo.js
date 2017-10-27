// import { ApolloClient, createNetworkInterface } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import fetch from 'isomorphic-fetch';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { ApolloLink } from 'apollo-link';
import { endpoint } from '../config';

let apolloClient = null;

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = fetch;
}

function create(initialState = {}) {
  const httpLink = createHttpLink({
    uri: endpoint, // Server URL (must be absolute)
    opts: {
      // Additional fetch() options like `credentials` or `headers`
      credentials: 'same-origin',
    },
  });

  const middlewareLink = new ApolloLink((operation, forward) => {
    const headers = {};

    if (typeof localStorage !== 'undefined' && localStorage.getItem('auth0IdToken')) {
      headers.authorization = `Bearer ${localStorage.getItem('auth0IdToken')}`;
    }

    operation.setContext({ headers });
    return forward(operation);
  });

  const link = middlewareLink.concat(httpLink);

  return new ApolloClient({
    link,
    connectToDevTools: process.browser,
    cache: new InMemoryCache().restore(initialState || {}),
    dataIdFromObject: o => o.id,
    ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
  });
}

export default function initApollo(initialState) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create(initialState);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState);
  }

  return apolloClient;
}
