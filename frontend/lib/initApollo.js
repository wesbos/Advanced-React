import { ApolloClient } from 'apollo-client';
import { ApolloLink, from } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import fetch from 'isomorphic-fetch';
import { withClientState } from 'apollo-link-state';
import { endpoint } from '../config';

let apolloClient = null;

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = fetch;
}

function create(initialState) {
  // Create a new Cache
  const cache = new InMemoryCache().restore(initialState || {});
  // First we create three peices of middleware
  const stateLink = withClientState({
    cache,
    defaults: {
      networkStatus: {
        __typename: 'NetworkStatus',
        isConnected: true,
        isCartOpen: true,
      },
    },
    resolvers: {
      Mutation: {
        updateNetworkStatus: (_, { isConnected }, { cache }) => {
          console.log(isConnected);
          const data = {
            networkStatus: {
              __typename: 'NetworkStatus',
              isConnected,
            },
          };
          cache.writeData({ data });
          return null;
        },
      },
    },
  });

  // 1. Create a link for local state to be managed in Apollo

  // 2. connect to our GraphQL API
  const httpLink = new HttpLink({
    uri: endpoint, // Server URL (must be absolute)
    opts: {
      credentials: 'same-origin',
    },
  });

  // 3. One to tack on our auth token on each request
  const authMiddleware = new ApolloLink((operation, forward) => {
    const headers = {};

    if (typeof localStorage !== 'undefined' && localStorage.getItem('token')) {
      headers.authorization = `Bearer ${localStorage.getItem('token')}`;
    }

    operation.setContext({ headers });
    return forward(operation);
  });

  return new ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
    link: from([stateLink, authMiddleware, httpLink]),
    cache,
    defaultOptions: {
      query: { errorPolicy: 'all' },
      mutate: { errorPolicy: 'all' },
    },
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
