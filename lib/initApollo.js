import { ApolloClient, createNetworkInterface } from 'react-apollo'
import fetch from 'isomorphic-fetch'

let apolloClient = null

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = fetch
}

function create (initialState) {

  const networkInterface = createNetworkInterface({
    uri: 'https://api.graph.cool/simple/v1/cj5xz8szs28930145gct82bdj', // Server URL (must be absolute)
    opts: { // Additional fetch() options like `credentials` or `headers`
      credentials: 'same-origin',
    }
  });

  // use the auth0IdToken in localStorage for authorized requests
  networkInterface.use([
    {
      applyMiddleware(req, next) {
        if (!req.options.headers) {
          req.options.headers = {};
        }

        // get the authentication token from local storage if it exists
        if (typeof localStorage !== 'undefined' && localStorage.getItem("auth0IdToken")) {
          req.options.headers.authorization = `Bearer ${localStorage.getItem("auth0IdToken")}`;
        }
        next();
      }
    }
  ]);

  return new ApolloClient({
    initialState,
    ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
    networkInterface
  })
}

export default function initApollo (initialState) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create(initialState)
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState)
  }

  return apolloClient
}
