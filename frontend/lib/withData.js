import withApollo from 'next-with-apollo';
import ApolloClient from 'apollo-boost';

// can also be a function that accepts a `headers` object (SSR only) and returns a config

export default withApollo({
  client: new ApolloClient({
    uri: 'http://localhost:4444',
    // cache: new InMemoryCache().restore(initialState || {}),
    // ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
    request: operation => {
      if (typeof localStorage !== 'undefined' && localStorage.getItem('token')) {
        operation.setContext({
          headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
      }
    },
  }),
});
