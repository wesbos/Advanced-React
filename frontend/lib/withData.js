import withApollo from 'next-with-apollo';
import ApolloClient from 'apollo-boost';
import { LOCAL_STATE_QUERY } from '../queries/queries';
// can also be a function that accepts a `headers` object (SSR only) and returns a config

const client = new ApolloClient({
  uri: 'http://localhost:4444',
  ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
  request: operation => {
    // if we're in the client and the user has a token, send it along with the request
    if (typeof localStorage !== 'undefined' && localStorage.getItem('token')) {
      operation.setContext({
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
    }
  },
  clientState: {
    resolvers: {
      Mutation: {
        toggleCart(_, variables, { cache }) {
          const { cartOpen } = cache.read({ query: LOCAL_STATE_QUERY });
          const data = { data: { cartOpen: !cartOpen } };
          cache.writeData(data);
          return data;
        },
      },
    },
    defaults: {
      cartOpen: false,
    },
  },
});

export { client };

export default withApollo({ client });
