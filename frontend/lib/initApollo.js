import ApolloClient from 'apollo-boost';
import fetch from 'isomorphic-fetch';
import { endpoint } from '../config';

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = fetch;
}

let apolloClient = null;

function create(initialState) {
  return new ApolloClient({
    uri: endpoint,
    request: operation => {
      if (typeof localStorage !== 'undefined' && localStorage.getItem('token')) {
        operation.setContext({
          headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
      }
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
